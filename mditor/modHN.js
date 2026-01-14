const getClsEditMode = (app)=> {
  const _m = app.embedRegistry.embedByExtension.md({app, containerEl: createDiv()})
  _m.load(); _m.editable = !0; _m.showEditor()
  const EditMode = Object.getPrototypeOf(Object.getPrototypeOf(_m.editMode)).constructor
  _m.unload()
  return EditMode
}

const snapMainEditor = (app)=> new class {
  editor = app.workspace.activeEditor.editor
  cs = this.editor.getCursor()
  leadCh = this.editor.getLine(this.cs.line).indexOf(' ')
  startOffset = this.cs.ch - this.leadCh - 1
}
const newPluginModal = (app, mditor)=> new class {
  main = async (document)=> {
    this.snap = snapMainEditor(app)
    await app.commands.executeCommandById('editor:rename-heading')
    this.extendsOfficialModal(document)
  }
  extendsOfficialModal = (document)=> {
    const container = document.querySelector('.modal-container:last-of-type')
    container.style.display = 'none'

    const myContainer = container.parentElement.createDiv(container.className)
    const myDestroy = ()=> {
      myContainer.remove(); mditor.destroy()
    }
    this.oModal = new class {
      rnEl = container.querySelector('.rename-textarea')
      saveBtn = container.querySelector('button.mod-cta')
      cancelBtn = container.querySelector('button.mod-cancel')
      getData = ()=> this.rnEl.value
      setData = (data)=> this.rnEl.value = data
      submit = ()=> { myDestroy(); this.saveBtn.click() }
      cancel = ()=> { myDestroy(); this.cancelBtn.click() }
    }

    // addSubmitArea
    myContainer.onclick = (evt)=> {evt.stopPropagation()}
    myContainer.createDiv({
      cls: 'kh-bg', onclick: ()=> this.submitData(),
      attr: {style: 'width: 100%; height: 100%;'},
    })
    // addRenameEditor
    myContainer.append(mditor.containerEl)
    mditor.containerEl.onkeydown = (evt)=> {
      if (evt.key == 'Escape') this.oModal.cancel()
      if (evt.key == 'Enter') this.submitData(evt.shiftKey)
    }
    mditor.setup(this.oModal.getData(), this.snap.startOffset)
  }
  submitData = (shouldSplit)=> {
    const cont = mditor.value
    let newHeading, nextLine
    if (shouldSplit) {
      const {ch} = mditor.editor.getCursor('from')
      newHeading = cont.slice(0, ch).trim()
      nextLine = cont.slice(ch).trim()
    }
    else newHeading = cont

    if (this.oModal.getData() == newHeading) {
      this.oModal.cancel(); return
    }
    if (newHeading) { this.oModal.setData(newHeading) }
    this.oModal.submit()

    if (nextLine) {
      const { editor, cs, leadCh } = this.snap

      let eventRef
      const onFileChanged = ()=> {
        app.metadataCache.offref(eventRef)
        editor.replaceRange(
          `\n${nextLine}`,
          {line: cs.line, ch: leadCh + newHeading.length + 1}
        )
        editor.setCursor({line: cs.line + 1, ch: 0})
      }
      eventRef = app.metadataCache.on('changed', onFileChanged)
      setTimeout(()=> {
        app.metadataCache.offref(eventRef)
      }, 2e3)
    }
  }
}
module.exports = (plg, ob)=> {
  const { app, Mditor } = plg
  const EditMode = getClsEditMode(app)

  const modHN = async (evt)=> {
    if (evt.ctrlKey || evt.altKey) return
    const { target, view: {document} } = evt

    const lineEl = document.querySelector('.cm-editor.cm-focused .cm-active.HyperMD-header')
    if (!lineEl) return

    const textEl = lineEl.querySelector('.cm-header:not(.cm-formatting)')
    if (!textEl) return

    const rect = textEl.getBoundingClientRect()
    const { clientX, clientY } = evt

    const isVerticallyInBounds = clientY >= rect.top && clientY <= rect.bottom
    if (!isVerticallyInBounds) return

    const CLICK_PADDING = 16 // px

    let isHorizontallyInBounds
    const direction = window.getComputedStyle(lineEl).direction
    if (direction === 'rtl') {
      isHorizontallyInBounds = clientX >= (rect.left - CLICK_PADDING) && clientX <= rect.right
    }
    else {
      isHorizontallyInBounds = clientX >= rect.left && clientX <= (rect.right + CLICK_PADDING)
    }
    if (isHorizontallyInBounds) {
      if (target.classList.contains('cm-formatting')) return

      const mditor = new Mditor(app, EditMode, {singleLine: !0})
      mditor.align(lineEl)
      await newPluginModal(app, mditor).main(document)
    }
  }
  const modHN2 = (ob.debounce)(modHN)

  plg.registerDomEvent(document, 'click', modHN2)
  plg.registerEvent(
    app.workspace.on('window-open', (win)=> {
      plg.registerDomEvent(win.doc, 'click', modHN2)
    })
  )
}
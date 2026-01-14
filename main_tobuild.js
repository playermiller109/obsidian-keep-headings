const ob = require('obsidian')
const { EditorView, keymap } = require('@codemirror/view')
const { EditorSelection, Prec } = require('@codemirror/state')
module.exports = class extends ob.Plugin {
  onload() {
    this.Mditor = require('./mditor/Mditor.js')({ob, EditorView, keymap, Prec})
    const modHN = require('./mditor/modHN.js'); modHN(this, ob)
  }
  onunload() {}
}
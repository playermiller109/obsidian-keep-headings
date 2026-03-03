
```js
let eMode
eMode = new EditMode(app, createDiv(), {
  app, scroll: 0, editMode: null,
  get editor() { return eMode.editor },
  get file() {},
  getMode: ()=> 'source',
  onMarkdownScroll: ()=> {},
  showSearch: ()=> {},
  toggleMode: ()=> {},
})
```

```js
if (
  target.isEqualNode(lineEl) ||
  target.classList.contains('cm-header') && !target.classList.contains('cm-formatting')
) {
  // const mditor ...
}
```

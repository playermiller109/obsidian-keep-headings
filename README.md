# Keep Headings

中文介绍见 [Obsidian Chinese Forum t38592](https://forum-zh.obsidian.md/t/topic/38592/1)

Keep Headings is a pure JS Obsidian community plugin. It can update internal links, such as `[[MD#Test]]`, when renaming a heading `Test` within the note `MD.md`.

Clicking on a heading will trigger a relatively more seamless in-place edit field for renaming. Changes are auto-submitted when clicking outside or pressing Ctrl + Enter.
Press Esc to cancel.

<details>
<summary>Test text, click to unfold</summary>

```markdown
## Test

[[#Test]]
```

```markdown
[[MD#Test]]
```
</details>

<p>
<img width="260" src="https://github.com/user-attachments/assets/fd7d8b26-0a77-45eb-9f21-add14acbf0bb">
<img width="260" src="https://github.com/user-attachments/assets/8b39782a-bfde-49d2-9218-27b61e52f1a0">
<img width="260" src="https://github.com/user-attachments/assets/f0ec84f5-9a70-4f3d-be29-bc2a4841fd4a">
</p>

- Won’t trigger on right-click or click with Ctrl or Alt key. For management.
- Data processing fully relies on the official “Rename this heading” command. Safe.
- If you accidentally submit an empty heading, though there will be a default “Update link” notice, don’t worry as no actual changes will be made.

For first-time use, please switch to another note or restart the app once.

More Q&A: [English](./docs/Q&A-en.md) | [中文](./docs/Q&A-zh.md)

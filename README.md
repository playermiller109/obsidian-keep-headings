# Keep Headings

> [!IMPORTANT]
> The plugin was rejected by the official review some time back. I chose this approach, not due to technical constraints, but as an effort towards the closest possible future-proof alignment with the official behavior, to prevent user lock-in.
>
> While I am fine with the official updates, the same may not hold true for users during transitions. I am sharing this and you can make an informed choice.

<span id="en-intro">English</span> | [中文](#zh-intro)

A community plugin for Obsidian. Enables editor-like heading renaming with internal link updates.

Click on a heading to trigger an in-place edit field for renaming. Changes are auto-submitted when you click outside or press Ctrl + Enter.
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

- No triggering on right-click or click with Ctrl or Alt key. For management.
- Data processing fully relies on the official “Rename this heading” command. Safe.
- If you accidentally submit an empty heading, nothing will change, though a default “Update link” notice may appear.

For first-time use, please switch to another note or restart the app once.

[English](#en-intro) | <span id="zh-intro">中文</span>

单击小标题时触发。点击区域外或按 Ctrl + Enter 自动提交。按 Esc 键取消修改。

- 右键或按住 Ctrl 或 Alt 键单击不触发，用于管理。
- 数据处理完全依赖官方“重命名当前小标题”命令，安全。
- 若你不慎提交了空的新标题，虽然有默认的更新提示，但不会有真的修改，请放心。

初次启用请切换页面或重启软件一次。

## Enter Key Combinations

| Modifiers |  Key  | Result |  <  |
| :-------: | :---: | :----: | :-: |
|           | Enter | Submit | 提交  |
|  ['Mod']  | Enter | Submit | 提交  |
| ['Shift'] | Enter | Split  | 拆分  |

[More Q&A](./docs/Q&A-en.md)

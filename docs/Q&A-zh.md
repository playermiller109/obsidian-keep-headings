
## Enter 及相关组合键

| Modifiers | Key   | will ... |
| --------- | ----- | -------- |
|           | Enter | 提交      |
| ['Mod']   | Enter | 提交      |
| ['Shift'] | Enter | 拆分 [^1] |

[^1]: 在小标题中段按下，光标前的部分将被提交为新标题，剩余部分将移至下一行。

## 关于功能请求

- 插件使用官方方法以确保安全的数据处理，不会添加需要独立复刻数据处理的需求。

- 光标移动到标题行时触发：英文论坛有人写了一版 [t86850#9](https://forum.obsidian.md/t/mini-plugin-update-internal-links-when-renaming-a-heading/86850/9)，但也有用户反映这种方式有些问题 [t75847#7](https://forum.obsidian.md/t/always-run-rename-this-heading-command-when-a-heading-is-clicked/75847/7)，供参考。

## 20241017

核心插件页面预览的一些行为是 Obsidian 的特性，并非本插件所致。

尝试：

1. 触发任意页面预览的浮窗
2. 在浮窗内右键触发上下文菜单，点击选择任意项目
3. 观察到浮窗立刻自动关闭

你可以使用其他插件或自行定义预览编辑视图解决这些问题，就像你在核心插件尚不支持预览编辑功能时所做的那样。

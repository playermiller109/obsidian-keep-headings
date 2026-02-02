
English | [中文](./Q&A-zh.md)

## Enter Key Combinations

| Modifiers | Key   | Result     |
| --------- | ----- | ---------- |
|           | Enter | Submit     |
| ['Mod']   | Enter | Submit     |
| ['Shift'] | Enter | Split [^1] |

[^1]: Pressing in the middle of a heading submits the content before the cursor as a new heading, and moves the rest to the next line.

## About Feature Request

- The plugin should ensure the safety of data processing using the official method. Requirements that involve separate replication of data processing won’t be added.

- Navigation-triggered renaming: Someone wrote a version [t86850#9](https://forum.obsidian.md/t/mini-plugin-update-internal-links-when-renaming-a-heading/86850/9), while some users reported that this method had certain problems [t75847#7](https://forum.obsidian.md/t/always-run-rename-this-heading-command-when-a-heading-is-clicked/75847/7), for your reference.

## 20241017

Some behaviors of the Core plugin Page preview are features of Obsidian and not caused by this plugin.

Try:

1. Trigger the popover for any page preview.
2. Right-click inside the popover to trigger the context menu. Click to select any item.
3. Observe that the popover closes automatically right away.

You can use another plugin’s or your own preview editing view to resolve these issues, just as you did when the Page preview didn’t support it.

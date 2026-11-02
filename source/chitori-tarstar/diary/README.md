# 全息日记（私有仓库）

`/chitori-tarstar/` 页面的日记默认保存在一个**独立的私有仓库**：

- 仓库：`ShawTarstar/our-diary`
- 目录：`diaries/`
- 分支：`main`

页面通过 GitHub Contents API 读取和写入；需要在日记窗口里连接一个有该私有仓库 `Contents: Read and write` 权限的 fine-grained token。

Token 只保存在当前页面内存中，不写入 localStorage。

## 修改仓库配置

如果私有仓库名不同，请修改 `source/chitori-tarstar/index.html` 里日记部分的：

```js
const DIARY_PRIVATE = true;
const DIARY_REPO = '你的用户名/私有仓库名';
const DIARY_BRANCH = 'main';
const DIARY_DIR = 'diaries';
```

## 文件格式

文件名建议：

```text
diary-YYYYMMDD-HHmmss-xxx.md
```

文件内容：

```markdown
---
title: "标题"
date: 2026-11-02T16:49:41+08:00
updated: 2026-11-02T16:49:41+08:00
---

正文内容
```

## 注意

- 私有仓库不会被公开读取；不连接 token 时页面无法读取日记。
- 这个目录（博客仓库里的 `source/chitori-tarstar/diary/`）不再存放日记内容，只保留说明。
- 如果改回公开仓库模式，把 `DIARY_PRIVATE` 设为 `false`，并可用 `scripts/diary-index.js` 生成静态索引。
- 页面会通过 GitHub API 创建 `diaries/` 目录和 `.md` 文件，不需要手动初始化。

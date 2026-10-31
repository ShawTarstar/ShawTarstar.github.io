# Tarblog

基于 **Hexo** + **Butterfly** 主题搭建的个人博客,通过 **GitHub Actions** 自动部署到 **GitHub Pages**。

🔗 线上地址: [https://shawtarstar.github.io/](https://shawtarstar.github.io/)

## 技术栈

| 类别 | 技术 |
|------|------|
| 静态博客框架 | **Hexo** 8 (**Node.js**) |
| 主题 | **Butterfly** (npm 方式安装) |
| 模板/样式渲染 | **Pug** + **Stylus** |
| CI/CD | **GitHub Actions** |
| 托管 | **GitHub Pages** |

## 目录结构

```
├── .github/workflows/deploy.yml  # 自动部署工作流
├── scaffolds/                    # 新建文章的模板
├── source/
│   ├── _posts/                   # 文章 (Markdown)
│   └── img/                      # 图片资源
├── _config.yml                   # 站点主配置
├── _config.butterfly.yml         # 主题配置
└── package.json
```

## 快速开始

环境要求: **Node.js** 20+

```bash
# 安装依赖
npm install

# 启动本地预览 → http://localhost:4000
npx hexo server
```

## 写文章

```bash
# 新建文章, 生成到 source/_posts/ 目录
npx hexo new "文章标题"
```

文章使用 **Markdown** 编写,头部 front-matter 支持单独设置封面图:

```yaml
---
title: 文章标题
date: 2026-10-31
tags: [Hexo, 博客]
top_img: /img/xxx.jpg   # 可选, 文章页顶部大图
---
```

## 部署

无需手动操作:push 到 `main` 分支后,**GitHub Actions** 自动执行 `hexo generate` 并发布到 **GitHub Pages**(见 `.github/workflows/deploy.yml`),也可在仓库 Actions 页面手动触发。

> 前提:仓库 Settings → Pages → Source 已选择 **GitHub Actions**。

## 常用命令

| 命令 | 说明 |
|------|------|
| `npx hexo server` | 本地预览 |
| `npx hexo new "标题"` | 新建文章 |
| `npx hexo generate` | 生成静态文件到 `public/` |
| `npx hexo clean` | 清除缓存与静态文件 |

## 自定义配置

- **站点信息**(标题/作者/语言):`_config.yml`
- **主题外观**(导航菜单/首页大图 `index_img`/头像/代码块/页脚):`_config.butterfly.yml`
- 图片放入 `source/img/`,配置中引用路径 `/img/文件名`
- **Butterfly** 完整配置文档: [https://butterfly.js.org/](https://butterfly.js.org/)

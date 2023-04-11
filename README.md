# YILS 的博客

For VuePress & Gungnir

[![docs](https://img.shields.io/badge/Docs-Gungnir-26A2FF?style=flat-square)](https://v2-vuepress-theme-gungnir.vercel.app/zh/docs/basic/intro.html) [![license](https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square)](LICENSE)

## 简介

[YILS.BLOG](yils.blog)
技术栈基于 TypeScript+Vue3+Vite3+VuePress2，魔改Gungnir主题

使用 Algolia 实现全文检索

## 安装

```bash
pnpm install
```

## 运行

```bash
pnpm docs:dev
```

## Plugins

This repository also contains the following plugins:

- [comment2](https://plugin-comment2.vuejs.press/zh/)：Comment and pageview plugin for VuePress2.include:Giscus,Waline,Twikoo,Artalk
- [plugin-giscus](packages/plugins/giscus): use [Giscus](https://github.com/giscus/giscus) (a comments system powered by [GitHub Discussions](https://docs.github.com/en/discussions)) in Vuepress 2
- [plugin-katex](packages/plugins/katex): [KaTeX](https://katex.org/)
- [plugin-chart](packages/plugins/chart): [Chart.js](https://www.chartjs.org)
- [plugin-mermaid](packages/plugins/mermaid): [Mermaid](https://mermaid-js.github.io)
- [plugin-reading-time](packages/plugins/reading-time): word count and reading time
- [plugin-baidu-tongji](packages/plugins/baidu-tongji): [百度统计](https://tongji.baidu.com/)
- [plugin-rss](packages/plugins/rss): RSS
- [plugin-code-enhance](packages/plugins/code-enhance): full-screen and ~~copy~~ button for code blocks
- [plugin-search](packages/plugins/search): edit [@vuepress/plugin-search](https://github.com/vuepress/vuepress-next/tree/main/packages/%40vuepress/plugin-search) to make it compatible with Gungnir

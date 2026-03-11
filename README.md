# OpenClaw Manager Native Site

`OpenClaw Manager Native 1.0.4` 官网单页项目。

## 使用

```bash
cd /Users/Zhuanz/work-space/openclaw-manager-site
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## GitHub Pages

推到 GitHub 仓库后，`main` 分支会通过 `.github/workflows/deploy.yml` 自动构建并发布到 GitHub Pages。

下载链接默认走 GitHub Releases 的 `latest` 资产文件名；当前展示版本、release 标题和 changelog 首条仍在 `src/main.js` 里维护。

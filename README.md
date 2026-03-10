# OpenClaw Manager Native Site

`OpenClaw Manager Native 1.0` 官网单页项目。

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

官网下载入口默认指向 GitHub Releases 的 `latest` 产物，避免每次正式发版都手改固定 tag。

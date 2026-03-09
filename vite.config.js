import { defineConfig } from 'vite';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const isPagesBuild = process.env.GITHUB_ACTIONS === 'true' && repository;

export default defineConfig({
  base: isPagesBuild ? `/${repository}/` : '/'
});


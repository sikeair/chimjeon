import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages 배포 시 레포지토리 이름에 맞게 경로를 설정합니다.
  // 예: https://<username>.github.io/chimjeon/ 일 경우 '/chimjeon/' 설정
  // './'로 설정하면 상대 경로로 빌드되어 범용적으로 작동합니다.
  base: './',
  build: {
    outDir: 'dist',
  }
});

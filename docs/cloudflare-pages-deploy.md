# Cloudflare Pages 배포 설정

같은 GitHub 저장소를 Cloudflare Pages 프로젝트 두 개에 연결합니다.

## AI Engineer

- Build command: `npm run build:ai`
- Build output directory: `dist`
- Custom domain: `ai.jingyeong.cloud`

## Full-Stack Developer

- Build command: `npm run build:fullstack`
- Build output directory: `dist`
- Custom domain: `fullstack.jingyeong.cloud`

두 프로젝트 모두 SPA 새로고침을 위해 `public/_redirects`의 fallback 규칙을 사용합니다.
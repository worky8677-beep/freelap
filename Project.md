# PROJECT.md — 프리랩 홈페이지

## 규칙 (최우선 적용)

1. **한국어로만 응답** (영어 응답 금지)
2. **식별자는 짧게** 작성
3. **단계별로 작업 수행** (한 번에 하나씩)
4. **접근성 속성 넣지 말 것**

---

## 프로젝트 개요

**서비스명:** FREELAB (봐바 프리랩)  
**도메인:** https://freelab.work  
**목적:** Figma 디자인 → React 정적 웹사이트 구현 및 배포  
**현재 상태:** v1 배포 중. v2 리뉴얼 작업 예정  
**클라이언트 전용:** 백엔드, 서버, 데이터베이스 없음

---

## 저장소 & 배포

| 항목 | 내용 |
|---|---|
| GitHub | https://github.com/worky8677-beep/freelap.git |
| 호스팅 | Vercel |
| 도메인 | freelab.work (가비아, Cloudflare 네임서버) |
| 배포 트리거 | `git push` → Cloudflare 자동 배포 |
| 빌드 output | `dist` |

---

## 팀 구성 & 숙련도

- 개인 프로젝트 (1인)
- 코딩 숙련도: **초급** (코딩 배운지 6개월)
- 코드 구현은 **Claude CLI / Gemini CLI 바이브 코딩**으로 수행
- 초보자가 이해할 수 있는 코드로 작성할 것 (성능 최적화보다 가독성 우선)

---


## 기술 스택

- React 19
- Tailwind CSS v4
- React Router v7
- Vite
- tailwind-merge

---

## 디자인 토큰

### 컬러
| 토큰명 | 값 | 용도 |
|---|---|---|
| `--color-cream` | `#F1F0EC` | 배경 |
| `--color-dark-green` | `#1B5513` | 포인트 |
| `--color-dark-brown` | `#2D2A25` | 기본 텍스트 |
| `--color-terracotta` | `#C4622D` | CTA, 강조 |

> ⚠️ 골드 아님 — 반드시 테라코타(`#C4622D`) 사용

### 폰트
- **기본 폰트:** Pretendard (CDN 로드)
- 폰트 패밀리 토큰: `--font-sans`

---

## 프론트엔드 코딩 규칙 (반드시 준수)

### 언어 & 라이브러리
- 파일 확장자는 `.jsx` / `.js` — TypeScript 사용 금지
- 아이콘: `@fortawesome/react-fontawesome` + `@fortawesome/free-solid-svg-icons`
- React Router v7 **data API** 문법 준수: `react-router`에서 import, `createBrowserRouter` + `RouterProvider` 사용
  - `<BrowserRouter>`, `<Routes>`, `<Route>` 구식 패턴 사용 금지
- 라우터 설정(`createBrowserRouter`)은 `main.jsx`에서 정의하고 `RouterProvider`를 직접 렌더링
- `App.jsx`는 `<Outlet />`으로 자식 라우트를 렌더링하며, 공통 레이아웃 제공

### Export 규칙
- `src/components/common/` 하위 컴포넌트는 **named export** 사용 (`export function Foo`)
  - `export default` 금지
  - import 시 반드시 중괄호 사용: `import { Nav } from '../components/common/Nav'`
- 페이지(`src/pages/`) 및 기타 파일은 `export default function` 사용
- barrel 파일(`index.js`, `index.jsx`) 생성 금지

### Tailwind CSS v4
- **v4 전용 문법만 사용**
- 테마 토큰은 `src/styles/tokens.css`의 `@theme` 블록으로 관리
- **하드코딩 금지:** hex 색상, rgba 값 직접 입력 금지
- **유틸리티 클래스 우선**
- `tailwind-merge`로 클래스 충돌 방지

### CSS 파일 구조
- `src/styles/index.css` — 폰트 import, Tailwind, base 스타일
- `src/styles/tokens.css` — `@theme` 디자인 토큰
- `main.jsx`에서 `import "./styles/index.css"` 로 진입
- 폰트는 HTML `<link>` 금지 — 반드시 `index.css`의 `@import url(...)` 방식으로 로드

---

## 페이지 구조

```
/           → 홈 (index)
/about      → 공간 소개
/pricing    → 요금제
/faq        → FAQ
/community  → 커뮤니티
```

### 네비게이션
- 네이버 예약 CTA 버튼 포함

---

## 디렉토리 구조

```
freelap/
├── src/
│   ├── main.jsx          # 라우터 설정 + 진입점
│   ├── App.jsx           # 공통 레이아웃 + Outlet
│   ├── pages/            # 페이지 컴포넌트 (export default)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Pricing.jsx
│   │   ├── Faq.jsx
│   │   └── Community.jsx
│   ├── components/
│   │   └── common/       # 공통 컴포넌트 (named export)
│   │       ├── Nav.jsx
│   │       └── Footer.jsx
│   └── styles/
│       ├── index.css     # 폰트 import + Tailwind
│       └── tokens.css    # @theme 디자인 토큰
├── public/
│   ├── images/           # 이미지 에셋
│   ├── sitemap.xml
│   └── robots.txt
└── PROJECT.md
```

---

## 타겟 키워드 (SEO)

| 우선순위 | 키워드 |
|---|---|
| P0 | 강서 공유 오피스 |
| P0 | 발산 공유 오피스 |
| P0 | 발산역 코워킹 |
| P1 | 공유 작업실 |
| P1 | 1인 작업가 공간 |
| P2 | 마곡 공유 오피스 |
| P2 | 24시간 공유 오피스 |

---

## 주요 타겟

- 프리랜서 / 1인 사업자
- 크리에이터
- 디자이너 / 개발자
- 마곡 인근 대기업 재직자 (부업 수요)

---

## 개발 컨벤션

1. **정밀한 편집:** 기존 디자인 무결성 유지하면서 최소한의 변경 우선
2. **CSS 변수:** 색상과 글꼴은 `@theme` 토큰으로 관리
3. **컴포넌트 단위 작업:** 한 번에 하나씩 요청하고 동작 확인 후 다음 단계 진행
4. **이미지:** 공간 사진 확보 전까지 placeholder 사용

---

## 바이브 코딩 가이드라인

- 컴포넌트 단위로 작업 요청할 것
- 코드 생성 후 반드시 동작 확인 후 다음 단계로 진행
- 초보자가 이해할 수 있는 간결한 코드 우선

---

## 배포 가이드

```bash
git add .
git commit -m "feat: [작업내용]"
git push
```
→ Vercel 자동 빌드 & 배포 → 1~2분 내 https://freelab.work 반영

### Vercel 설정
- **빌드 명령어:** `npm run build`
- **빌드 output 디렉토리:** `dist`

### 롤백
- Vercel 대시보드 → Deployments → 이전 배포 → "Redeploy"

---

**문서 버전:** v1.0  
**기준일:** 2026-06-02
# 구현 플랜: Production Readiness (The Launchpad)

**상태**: ✅ 완료
**작성일**: 2026-02-02
**최종 업데이트**: 2026-02-02
**목표**: "Feature Planner"를 포함한 웹사이트의 배포 전 최적화, 보안 점검, E2E 테스트를 수행하여 상용 수준의 완성도를 확보합니다.

---

## 📋 개요

### 배경
기능 구현이 완료되었으므로, 실제 사용자에게 배포하기 전 성능(Performance), 검색 엔진 최적화(SEO), 안정성(Stability)을 검증해야 합니다.

### 핵심 목표
- **SEO**: 검색 엔진 및 소셜 미디어 공유 시 올바른 미리보기 제공.
- **Stability**: 핵심 사용자 흐름(Critical Path)에 대한 자동화된 E2E 테스트 구축.
- **Performance**: 이미지, 폰트, 번들 사이즈 최적화.

---

## 🏗️ 기술 스택 및 도구

| 영역 | 도구 | 선정 이유 |
|------|-----------|-----------|
| **E2E Test** | Playwright | 브라우저 간 크로스 체킹 및 안정적인 시나리오 테스트 |
| **SEO** | Next.js Metadata | 서버 사이드 렌더링 시 메타 태그 자동 생성 |
| **Audit** | Lighthouse / NPM Audit | 웹 성능 지표 및 패키지 보안 취약점 점검 |

---

## 🚀 구현 페이즈 (Implementation Phases)

### Phase 1: SEO & Metadata (검색 최적화)
**목표**: 모든 페이지(`/`, `/about`, `/project`, `/planner`, `/contact`)에 적절한 메타데이터와 Open Graph 태그를 적용합니다.
**예상 시간**: 1.5시간
**상태**: ✅ Complete

#### Tasks
- [x] **Task 1.1**: `src/app/layout.tsx`에 기본 메타데이터(Base Metadata) 설정.
- [x] **Task 1.2**: 각 페이지별 `generateMetadata` 또는 정적 메타데이터 정의.
  - `/planner`: "Build Your Blueprint | LAYER 0" 등.
- [x] **Task 1.3**: `sitemap.ts` 및 `robots.txt` 생성.

### Phase 2: Critical Path Verification (E2E 테스트)
**목표**: 사용자가 사이트에 들어와서 문의/견적을 남기는 핵심 흐름이 깨지지 않음을 보장합니다.
**예상 시간**: 2시간
**상태**: ✅ Complete

#### Tasks
- [x] **Task 2.1**: Playwright 설치 및 설정 (`npm init playwright@latest`).
- [x] **Task 2.2**: "Planner Flow" 테스트 작성.
  - 기능 선택 -> 폼 입력 -> 제출 -> 성공 메시지 확인.
- [x] **Task 2.3**: "Contact Flow" 테스트 작성.
- [x] **Task 2.4**: Mobile View 검증.
  - 모바일 뷰포트(`iPhone 13` 등)에서 Sticky Footer 동작 확인.
  - Scroll-to-form 인터랙션 정상 동작 확인.

### Phase 3: Final Build & Audit (배포 준비)
**목표**: 프로덕션 빌드 시 에러가 없고, 성능/보안 기준을 충족하는지 확인합니다.
**예상 시간**: 1시간
**상태**: ✅ Complete

#### Tasks
- [x] **Task 3.1**: `npm run build` 실행 및 타입 에러/린트 에러 최종 점검.
- [x] **Task 3.2**: `npm audit` 실행 및 취약점 분석.
  - Next.js 보안 취약점 발견으로 `v16.1.6`으로 업데이트 완료.
- [x] **Task 3.3**: 이미지 `sizes` 속성 최적화 (Lighthouse 지표 개선).

---

## 📝 Quality Gate ✋
- [x] **Build**: 프로덕션 빌드 성공.
- [x] **Test**: Playwright E2E 테스트(Desktop/Mobile) 전원 통과.
- [x] **Security**: `npm audit` 취약점 0개 확인.

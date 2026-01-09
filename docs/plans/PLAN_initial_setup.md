# 구현 플랜: LAYER 0 초기 설정 (Initial Setup)

**상태**: 🔄 진행 중
**작성일**: 2026-01-05
**최종 업데이트**: 2026-01-05

---

**⚠️ 중요 지침**: 각 페이즈 완료 후 다음을 수행해야 합니다:
1. ✅ 완료된 태스크 체크
2. 🧪 모든 품질 게이트(Quality Gate) 검증 실행
3. ⚠️ `npm audit`을 포함한 모든 체크 항목 통과 확인
4. 📅 "최종 업데이트" 날짜 갱신
5. 📝 Notes 섹션에 학습 내용 기록
6. ➡️ 그 후 다음 페이즈로 진행

⛔ **품질 게이트를 통과하지 못한 상태에서 절대 진행하지 마십시오.**

---

## 📋 개요

### 기능 설명
하이엔드 D2C 에이전시 'LAYER 0'의 브랜드 철학인 "The Essential Blueprint"를 구현하기 위한 웹사이트의 초기 인프라 및 랜딩 페이지 구축입니다. Next.js 16+ 기반의 최신 아키텍처와 Tailwind CSS를 활용한 브랜드 디자인 시스템을 포함합니다.

### 성공 기준
- [ ] `npm audit` 취약점 0건 (High Level 이상)
- [ ] Next.js 16+ 기반의 App Router 구조 정상 동작
- [ ] 브랜드 컬러(Technical Black, Off-White, Signal Red)가 적용된 Tailwind 시스템 구축
- [ ] Vitest 기반의 TDD 환경 및 샘플 테스트 통과

---

## 🏗️ 아키텍처 및 보안 결정

| 결정 | 근거 | 트레이드오프 |
|------|------|--------------|
| **Next.js 16+ (App Router)** | 최신 React 기능(Server Actions 등) 및 보안 패치 적용 | 최신 생태계로 인한 일부 레거시 라이브러리 호환성 주의 필요 |
| **Strict Security Gate** | `npm audit` 강제화를 통한 무결성 보장 | 개발 시 의존성 관리에 엄격함 요구 |
| **Zod Validation** | Server Actions 및 데이터 입력의 무결성 보장 | 스키마 정의를 위한 추가 보일러플레이트 발생 |
| **Framer Motion** | 공학적 정밀함을 표현하는 애니메이션 구현 | 번들 사이즈 증가 (Lazy Loading으로 완화) |

---

## 📦 종속성 (Dependencies)

### 시작 전 요구사항 (Dependencies)
- [x] Node.js v18 이상 (LTS 권장)
- [x] pnpm 또는 npm

### 외부 종속성 (Latest Stable)
- `next`: v16.x 이상
- `react`: v19.x 이상
- `tailwindcss`: v3.4+ 또는 v4 (안정화 버전에 따름)
- `framer-motion`: Latest
- `vitest`: Latest
- `zod`: Latest

---

## 🚀 구현 페이즈 (Implementation Phases)

### Phase 1: 파운데이션 (보안 인프라 구축)
**목표**: 보안이 강화된 Layer 0의 실행 환경 구축 (Next.js 16+, Tailwind, Vitest)
**예상 시간**: 2시간
**상태**: ✅ Complete

#### Tasks

**🔴 RED: 실패하는 테스트 작성**
- [x] **Test 1.1**: Vitest 환경 검증을 위한 `sum.test.ts` 작성 (실패 유도)
  - 목표: 테스트 러너 동작 확인

**🟢 GREEN: 테스트 통과 및 구현**
- [x] **Task 1.2**: Next.js 16+ 프로젝트 초기화 (Strict TypeScript)
  - `npx create-next-app@latest` 사용
  - ESLint, TypeScript, Tailwind CSS 포함
- [x] **Task 1.3**: 보안 헤더(CSP, HSTS) 및 `next.config.js` 보안 설정
- [x] **Task 1.4**: Tailwind CSS 설정 (브랜드 컬러 변수 정의)
  - `colors.tech-black`: `#1A1A1A`
  - `colors.off-white`: `#F5F5F5`
  - `colors.signal-red`: `#FF0000` (또는 지정된 헥스 코드)
- [x] **Task 1.5**: Vitest 및 React Testing Library 설정
  - `vite.config.ts`, `vitest.setup.ts` 구성
- [x] **Task 1.6**: `npm audit` 확인 및 종속성 버전 고정

**🔵 REFACTOR: 코드 개선**
- [x] **Task 1.7**: 초기 보일러플레이트 코드 정리 및 폴더 구조 정립 (`src/`)

#### Quality Gate ✋
- [x] **Security**: `npm audit --audit-level=high` 결과 취약점 0건
- [x] **Build**: `npm run build` 성공
- [x] **Test**: `npm run test` 통과 (Hello World 테스트)
- [x] **Lint**: `npm run lint` 통과

---

### Phase 2: 더 그리드 (디자인 시스템)
**목표**: "Blueprint" 컨셉을 구현하는 기초 디자인 시스템(Typography, Grid) 개발
**목표**: "Blueprint" 컨셉을 구현하는 기초 디자인 시스템(Typography, Grid) 개발
**예상 시간**: 3시간
**상태**: ✅ Complete

#### Tasks

**🔴 RED: 실패하는 테스트 작성**
- [x] **Test 2.1**: Typography 컴포넌트(`H1`, `P` 등)의 렌더링 및 스타일 테스트 작성
- [x] **Test 2.2**: Grid 레이아웃 컴포넌트의 구조 테스트 작성

**🟢 GREEN: 테스트 통과 및 구현**
- [x] **Task 2.3**: 폰트 설정 (Inter 또는 Manrope 등 테크니컬 폰트 적용)
- [x] **Task 2.4**: `components/atoms/Typography.tsx` 구현 (엄격한 Line-height 적용)
- [x] **Task 2.5**: `components/atoms/Grid.tsx` 구현 (배경 모눈종이 패턴 등)
- [x] **Task 2.6**: 기본 UI Atoms (`Button`, `Input`) 구현 (Hover 시 Signal Red 적용)

**🔵 REFACTOR: 코드 개선**
- [x] **Task 2.7**: 컴포넌트 Props 인터페이스 최적화 및 스토리북(옵션) 고려

#### Quality Gate ✋
- [x] **TDD**: 모든 컴포넌트에 대한 단위 테스트 작성 및 통과
- [x] **Visual**: 그리드 시스템이 1px 오차 없이 렌더링 되는지 확인
- [x] **Security**: 새로운 패키지 추가 시 `npm audit` 재수행

---

### Phase 3: 더 제로 앵커 (헤더 및 내비게이션)
**목표**: 브랜드 아이덴티티가 담긴 지속적인 헤더 및 내비게이션 구현
**예상 시간**: 2시간
**상태**: ✅ Complete

#### Tasks

**🔴 RED: 실패하는 테스트 작성**
- [x] **Test 3.1**: 내비게이션 링크 라우팅 테스트 (Mock Router)
- [x] **Test 3.2**: 헤더 스크롤 동작 테스트 (Sticky/Fixed)

**🟢 GREEN: 테스트 통과 및 구현**
- [x] **Task 3.3**: `components/organisms/Header.tsx` 구현 (고정 포지션)
- [x] **Task 3.4**: 'The Zero Anchor' 로고 SVG 컴포넌트 구현
- [x] **Task 3.5**: `components/molecules/Nav.tsx` 구현 (미니멀 호버 인터랙션)

**🔵 REFACTOR: 코드 개선**
- [x] **Task 3.6**: 반응형 처리 (모바일 메뉴 로직)

#### Quality Gate ✋
- [x] **Test**: 내비게이션 통합 테스트 통과
- [x] **Responsiveness**: 모바일/데스크탑 뷰 확인

---

### Phase 4: 더 청사진 (히어로 섹션)
**목표**: 사이트의 첫인상을 결정짓는 "공학적 도면" 컨셉의 히어로 섹션 구현
**예상 시간**: 3시간
**상태**: ✅ Complete

#### Tasks

**🔴 RED: 실패하는 테스트 작성**
- [x] **Test 4.1**: 히어로 섹션 주요 텍스트 접근성(A11y) 테스트
- [x] **Test 4.2**: 애니메이션 트리거 시점 테스트 (가능한 경우)

**🟢 GREEN: 테스트 통과 및 구현**
- [x] **Task 4.3**: `components/organisms/Hero.tsx` 레이아웃 잡기
- [x] **Task 4.4**: Framer Motion을 이용한 "드로잉(Line Drawing)" 애니메이션 구현
  - 페이지 로드 시 도면이 그려지듯 나타나는 효과
- [x] **Task 4.5**: 반응형 타이포그래피 적용

**🔵 REFACTOR: 코드 개선**
- [x] **Task 4.6**: 애니메이션 성능 최적화 (Layout Thrashing 방지)

#### Quality Gate ✋
- [x] **Performance**: Lighthouse Performance 점수 90+ (애니메이션 부하 확인)
- [x] **A11y**: Lighthouse Accessibility 점수 100

---

## 📝 메모 및 학습 (Notes & Learnings)
- (Phase 진행 중 발견된 이슈나 중요한 기술적 결정을 기록하세요)

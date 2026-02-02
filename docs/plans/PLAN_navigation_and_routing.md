# 구현 플랜: 내비게이션 및 라우팅 재설계 (Navigation & Routing)

**상태**: ✅ 완료
**작성일**: 2026-01-10
**최종 업데이트**: 2026-01-10

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
'LAYER 0 브랜드 전략 가이드'에 따라 기존의 단일 페이지 아키텍처를 다중 페이지 아키텍처로 재편합니다. [About], [Project], [Contact]의 세 가지 핵심 메뉴를 중심으로 라우팅 구조를 재설계하고, 브랜드 철학을 각 페이지에 심도 있게 반영합니다.

### 새로운 사이트맵 (Sitemap)
*   **`/` (Home)**: Hero 섹션을 포함한 메인 랜딩 페이지.
*   **`/about`**: 브랜드 철학 "Zero Point"를 소개하는 페이지.
*   **`/project`**: 프로젝트 포트폴리오를 보여주는 페이지.
*   **`/contact`**: 기존 문의 폼 로직이 이전된 독립된 문의 페이지.

---

## 🏗️ 아키텍처 및 기술 결정

| 영역 | 기술 스택 | 선정 이유 |
|------|-----------|-----------|
| **Routing** | Next.js 16+ App Router | 파일 시스템 기반의 직관적인 라우팅 및 최신 React 기능 활용 |
| **Animation** | Framer Motion (`AnimatePresence`) | 페이지 전환 간의 부드럽고 정밀한 사용자 경험 제공 |
| **Testing** | Vitest | TDD 원칙에 따라 라우팅, 컴포넌트, 로직 이관을 안정적으로 검증 |

---

## 🚀 구현 페이즈 (Implementation Phases)

### Phase 1: 라우팅 구조 및 기본 페이지 생성
**목표**: Next.js App Router를 사용하여 신규 페이지(`/about`, `/project`, `/contact`)의 기본 구조와 라우팅을 설정합니다.
**예상 시간**: 2시간
**상태**: ✅ Complete

#### Tasks

**🔴 RED: 실패하는 테스트 작성**
- [x] **Test 1.1**: `Nav` 컴포넌트가 `About`, `Project`, `Contact` 링크를 포함하고, 각 링크가 올바른 `href`를 가지는지 검증하는 테스트 작성.
- [x] **Test 1.2**: 로고 클릭 시 Home(`/`)으로 이동하는지 검증하는 테스트 추가.

**🟢 GREEN: 테스트 통과 및 구현**
- [x] **Task 1.3**: `src/app/about`, `src/app/project`, `src/app/contact` 디렉토리 생성.
- [x] **Task 1.4**: 각 디렉토리 내에 기본적인 `page.tsx` 파일과 placeholder 컴포넌트 생성.
- [x] **Task 1.5**: `components/molecules/Nav.tsx`를 수정하여 새로운 메뉴 구성(`[About], [Project], [Contact]`)을 반영.
- [x] **Task 1.6**: `components/atoms/Logo.tsx`를 `next/link`로 래핑하여 Home(`/`)으로 연결.

**🔵 REFACTOR: 코드 개선**
- [x] **Task 1.7**: 내비게이션 아이템 데이터를 배열로 분리하여 관리 (`Nav.tsx` 내부).

#### Quality Gate ✋
- [x] **Test**: `Nav.test.tsx`의 모든 테스트 통과.
- [x] **Build**: `npm run build` 성공.
- [x] **Lint**: `npm run lint` 통과.
- [x] **Manual**: 각 페이지로의 라우팅이 정상적으로 동작하는지 수동 확인.

---

### Phase 2: 콘텐츠 이전 및 페이지 전환 애니메이션 구현
**목표**: 기존 `About`, `Contact` 섹션의 콘텐츠와 로직을 신규 페이지로 안전하게 이전하고, Framer Motion을 사용한 페이지 전환 애니메이션을 구현합니다.
**예상 시간**: 3시간
**상태**: ✅ Complete

#### Tasks

**🔴 RED: 실패하는 테스트 작성**
- [x] **Test 2.1**: `/contact` 페이지에서 `ContactForm`이 렌더링되는지 확인하는 테스트 작성.
- [x] **Test 2.2**: `actions/contact.ts`의 `submitContact` 액션에 대한 단위 테스트가 `/contact` 페이지의 테스트 파일 내에서도 유효한지 확인.
- [x] **Test 2.3**: 페이지 전환 시 애니메이션 효과를 위한 `motion.div`가 존재하는지 확인하는 테스트 작성 (가능한 경우).

**🟢 GREEN: 테스트 통과 및 구현**
- [x] **Task 2.4**: `src/app/page.tsx`에서 `AboutSection`을 `src/app/about/page.tsx`로 이동.
- [x] **Task 2.5**: `ContactSection` 및 `ContactForm`을 `src/app/contact/page.tsx`로 이동.
- [x] **Task 2.6**: `src/actions/contact.ts`와 `src/lib/schemas/contact.ts`가 새로운 위치에서 올바르게 참조되는지 확인.
- [x] **Task 2.7**: `AnimatePresence`를 활용하여 페이지 전환 애니메이션을 구현하는 공유 레이아웃 (`src/app/layout.tsx` 또는 신규 `template.tsx` 활용) 생성.

**🔵 REFACTOR: 코드 개선**
- [x] **Task 2.8**: 페이지 전환 애니메이션의 지속 시간 및 이징(easing) 효과를 브랜드 가이드에 맞게 조정.

#### Quality Gate ✋
- [x] **TDD**: 콘텐츠가 이전된 각 페이지에 대한 단위 테스트 작성 및 통과.
- [x] **Security**: Contact 폼의 Server Action이 이전 후에도 XSS 및 CSRF 방어 로직을 유지하는지 확인.
- [x] **UX**: 페이지 전환이 60fps를 유지하며 부드럽게 동작하는지 확인.

---

### Phase 3: 메인 페이지 리팩토링 및 최종 검증
**목표**: 메인 페이지(`src/app/page.tsx`)에서 이전된 섹션들을 제거하고, 전체적인 라우팅 구조의 무결성을 검증합니다.
**예상 시간**: 1.5시간
**상태**: ✅ Complete

#### Tasks

**🔴 RED: 실패하는 테스트 작성**
- [x] **Test 3.1**: `src/app/page.tsx`를 렌더링했을 때, `AboutSection`과 `ContactSection`의 특정 텍스트나 요소가 더 이상 존재하지 않음을 검증하는 테스트 작성.

**🟢 GREEN: 테스트 통과 및 구현**
- [x] **Task 3.2**: `src/app/page.tsx`에서 `AboutSection`, `ContactSection` 컴포넌트 및 관련 import 구문 제거.
- [x] **Task 3.3**: 메인 페이지가 `/about`, `/project`, `/contact` 페이지로 사용자를 유도하는 명확한 CTA(Call to Action)를 포함하도록 콘텐츠 단순화.

**🔵 REFACTOR: 코드 개선**
- [x] **Task 3.4**: 프로젝트 전반의 `import` 경로를 점검하고, 불필요한 코드를 정리.

#### Quality Gate ✋
- [x] **Test**: 모든 테스트 (`npm run test`) 통과.
- [x] **Build**: `npm run build` 최종 성공.
- [x] **Lint**: `npm run lint` 최종 통과.
- [x] **Performance**: Lighthouse 점수 저하가 없는지 확인.

---

## 📝 메모 및 학습 (Notes & Learnings)
- 페이지 전환 애니메이션은 `template.tsx`를 활용하여 구현함.
- `AboutSection`, `ContactSection`은 각각 독립 페이지로 분리되어 미니멀한 라우팅 구조 확립.
- `Header`를 `layout.tsx`로 이동하여 중복 제거 및 유지보수성 향상.
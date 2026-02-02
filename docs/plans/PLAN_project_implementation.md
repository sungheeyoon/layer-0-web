# 구현 플랜: Project 아카이브 구현 (The Engineering Archive)

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
LAYER 0의 포트폴리오 페이지인 `/project`를 "Engineering Archive" 컨셉으로 구현합니다. 단순한 이미지 나열이 아닌, 프로젝트의 기술적 본질(설계도)과 결과물(레이어)을 교차하여 보여주는 인터랙티브 아카이브입니다.

### 핵심 컨셉: Decoded Layers
- **Visual**: 엄격한 Grid 시스템 위에 배치된 Technical Card UI.
- **Interaction**: 마우스 오버 시 비주얼 레이어가 걷히며 기술 스택과 핵심 성과(Metric)가 드러나는 "Layer Unveiling" 효과.
- **Tone**: 정밀함(Precision), 구조적(Structural), 미니멀(Minimal).

---

## 🏗️ 아키텍처 및 기술 결정

| 영역 | 기술 스택 | 선정 이유 |
|------|-----------|-----------|
| **Data** | TypeScript Interface | 정적 데이터의 타입 안정성 및 확장성 보장 |
| **Styling** | Tailwind CSS + Grid | 복잡한 레이아웃의 정밀한 구현 |
| **Animation** | Framer Motion | Hover 시 부드러운 레이어 전환 및 리스트 등장 효과 |
| **Assets** | Next.js Image | 이미지 최적화 및 레이아웃 시프트 방지 |

---

## 🚀 구현 페이즈 (Implementation Phases)

### Phase 1: The Schema (데이터 설계)
**목표**: 프로젝트 데이터를 위한 타입 정의(Interface)와 Mock 데이터를 구축합니다.
**예상 시간**: 1.5시간
**상태**: ✅ Complete

#### Tasks

**🔴 RED: 실패하는 테스트 작성**
- [x] **Test 1.1**: 프로젝트 데이터 배열을 가져오는 유틸리티 함수의 반환 타입과 길이를 검증하는 테스트 작성.

**🟢 GREEN: 테스트 통과 및 구현**
- [x] **Task 1.2**: `src/lib/types/project.ts`에 `Project` 인터페이스 정의.
  - 필드: `id`, `title`, `description`, `client`, `tags` (string[]), `imageUrl`, `metrics` (optional), `year`.
- [x] **Task 1.3**: `src/lib/data/projects.ts`에 샘플 데이터(Mock Data) 3~4개 작성.
  - LAYER 0의 브랜드 감성에 맞는 가상의 프로젝트 데이터 구성.
- [x] **Task 1.4**: 데이터 접근을 위한 간단한 유틸리티 함수(`getAllProjects`) 구현.

#### Quality Gate ✋
- [x] **Test**: 데이터 로드 및 타입 검증 테스트 통과.
- [x] **Lint**: 타입 정의 관련 린트 에러 없음.

---

### Phase 2: The Unit (프로젝트 카드 컴포넌트)
**목표**: "Decoded Layers" 인터랙션이 적용된 개별 프로젝트 카드 컴포넌트를 개발합니다.
**예상 시간**: 2.5시간
**상태**: ✅ Complete

#### Tasks

**🔴 RED: 실패하는 테스트 작성**
- [x] **Test 2.1**: `ProjectCard` 컴포넌트가 `props`로 전달된 제목, 설명, 태그를 올바르게 렌더링하는지 확인하는 테스트 작성.
- [x] **Test 2.2**: 카드 내에 이미지 요소가 존재하는지 확인하는 테스트.

**🟢 GREEN: 테스트 통과 및 구현**
- [x] **Task 2.3**: `src/components/molecules/ProjectCard.tsx` 기본 구조 구현.
- [x] **Task 2.4**: 카드 레이아웃 스타일링 (Grid 기반, Border 처리).
- [x] **Task 2.5**: Framer Motion을 활용한 Hover 인터랙션 구현.
  - 기본 상태: 프로젝트 썸네일 + 미니멀한 타이틀.
  - Hover 상태: 썸네일 오버레이 + 기술 스택/설명/성과 지표 등장.

**🔵 REFACTOR: 코드 개선**
- [x] **Task 2.6**: 접근성(a11y) 보완 - Hover 불가능한 모바일 환경을 위한 터치 인터랙션 또는 기본 노출 처리.

#### Quality Gate ✋
- [x] **Test**: 컴포넌트 렌더링 테스트 통과.
- [x] **UX**: Hover 인터랙션이 끊김 없이 부드러운지 확인.
- [x] **Visual**: 카드 크기가 다양한 뷰포트에서 깨지지 않는지 확인.

---

### Phase 3: The Archive (아카이브 페이지 구축)
**목표**: 완성된 카드를 반응형 그리드에 배치하고, 페이지 진입 애니메이션을 적용합니다.
**예상 시간**: 2시간
**상태**: ✅ Complete

#### Tasks

**🔴 RED: 실패하는 테스트 작성**
- [x] **Test 3.1**: `/project` 페이지에서 프로젝트 리스트 개수만큼 카드가 렌더링되는지 확인하는 테스트 작성.
- [x] **Test 3.2**: 페이지 제목("Engineering Archive" 등)이 존재하는지 확인.

**🟢 GREEN: 테스트 통과 및 구현**
- [x] **Task 3.3**: `src/app/project/page.tsx` 수정.
  - `Header` (이미 Layout에 있음) 아래에 페이지 타이틀 섹션 추가.
  - `projects` 데이터를 불러와 매핑.
- [x] **Task 3.4**: 반응형 Grid 레이아웃 적용 (Mobile 1열 -> Tablet 2열 -> Desktop 3열).
- [x] **Task 3.5**: Framer Motion `staggerChildren`을 이용한 카드 순차 등장 애니메이션 구현.

**🔵 REFACTOR: 코드 개선**
- [x] **Task 3.6**: `ProjectGrid` 컴포넌트로 리스트 부분 분리 (유지보수성 향상).

#### Quality Gate ✋
- [x] **Test**: 페이지 통합 테스트 통과.
- [x] **Performance**: 이미지 로딩 최적화 확인 (Lighthouse).
- [x] **Responsiveness**: 모든 디바이스에서 그리드가 의도대로 동작하는지 확인.

---

## 📝 메모 및 학습 (Notes & Learnings)
- `ProjectCard`에서 `next/image` 사용 시 외부 도메인(`placehold.co`) 설정을 `next.config.ts`에 추가함.
- `ProjectGrid`를 클라이언트 컴포넌트로 분리하여 페이지의 서버 렌더링 이점을 유지하면서 애니메이션을 구현함.
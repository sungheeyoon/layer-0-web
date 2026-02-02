# 구현 플랜: Feature Planner (The Architect's Desk)

**상태**: 📝 계획 수립 (Planned)
**작성일**: 2026-02-02
**목표**: 고객이 필요한 기능을 직접 선택하고 견적/구조를 설계할 수 있는 인터랙티브 "Feature Planner" 페이지 구현.

---

## 📋 개요

### 기능 설명
"Feature Planner"는 LAYER 0의 잠재 고객이 웹/앱 프로젝트에 필요한 기능(Authentication, Payment, Admin Panel 등)을 블록 조립하듯 선택하고, 대략적인 프로젝트 규모와 기술 스택을 시각적으로 확인할 수 있는 도구입니다.

### 핵심 컨셉: The Blueprint Table
- **Visual**: 건축가의 작업대(Desk) 또는 청사진(Blueprint) 위에서 부품을 고르는 듯한 UI.
- **Interaction**: 기능을 "Drag & Drop" 하거나 "Click to Add" 하여 프로젝트 명세서(Spec Sheet)를 작성.
- **Output**: 선택된 기능에 따른 예상 공수(Time) 또는 난이도(Complexity) 시각화.

---

## 🏗️ 아키텍처 및 기술 결정

| 영역 | 기술 스택 | 선정 이유 |
|------|-----------|-----------|
| **State Mgmt** | Zustand | 복잡한 선택 상태(Selection State) 및 견적 계산 로직의 간편한 관리 |
| **Data Structure** | TypeScript Const | 기능 목록, 카테고리, 가격/난이도 데이터의 정적 관리 |
| **UI Components** | Custom Checkbox/Radio Cards | 직관적인 선택 UX 제공 |
| **Action** | Server Actions | 완성된 명세서를 이메일/DB로 전송 |

---

## 🚀 구현 페이즈 (Implementation Phases)

### Phase 1: The Specs (데이터 및 상태 설계)
**목표**: 기능(Feature) 데이터 구조를 정의하고, 선택 상태를 관리하는 스토어를 구축합니다.
**예상 시간**: 2시간

#### Tasks
- [ ] **Task 1.1**: `src/lib/data/features.ts` 정의 (카테고리: Auth, Commerce, CMS, Social, etc.).
  - 각 기능은 `id`, `name`, `description`, `complexity` (score), `price` (optional) 필드 보유.
- [ ] **Task 1.2**: Zustand 스토어 `usePlannerStore` 구현.
  - `selectedFeatures`, `addFeature`, `removeFeature`, `totalComplexity` 계산 로직.
- [ ] **Task 1.3**: 스토어 로직 검증을 위한 단위 테스트 (`src/stores/planner.test.ts`).

### Phase 2: The Modules (UI 컴포넌트 개발)
**목표**: 개별 기능 카드와 카테고리 섹션 UI를 구현합니다.
**예상 시간**: 3시간

#### Tasks
- [ ] **Task 2.1**: `FeatureCard` 컴포넌트 구현.
  - 선택/미선택 상태 스타일링 (Blueprint 스타일).
  - Hover 시 상세 설명 툴팁/확장.
- [ ] **Task 2.2**: `CategorySection` 컴포넌트 구현.
  - 아코디언 또는 탭 형태로 카테고리 구분.
- [ ] **Task 2.3**: `/planner/page.tsx` 레이아웃 잡기.
  - 좌측: 기능 선택 영역 (Palette).
  - 우측/하단: 현재 견적서/명세서 (Blueprint Sheet).

### Phase 3: The Assembly (인터랙션 및 통합)
**목표**: 선택에 따른 실시간 반응(견적/난이도 그래프 등)과 제출 기능을 구현합니다.
**예상 시간**: 2.5시간

#### Tasks
- [ ] **Task 3.1**: 우측 'Spec Sheet' 패널 구현.
  - 선택된 기능 리스트 나열.
  - 총 난이도/기간 시각화 (Progress Bar or Graph).
- [ ] **Task 3.2**: `SubmitSpec` Server Action 구현.
  - 선택된 데이터를 포맷팅하여 이메일 전송 또는 로그 저장.
- [ ] **Task 3.3**: 최종 제출 폼 연결 (연락처 입력 후 명세서와 함께 전송).

### Phase 4: Polish (시각적 완성도)
**목표**: LAYER 0의 브랜드 감성에 맞는 애니메이션과 디테일을 추가합니다.
**예상 시간**: 1.5시간

#### Tasks
- [ ] **Task 4.1**: 기능 추가/삭제 시 애니메이션 (Framer Motion `layout` prop 활용).
- [ ] **Task 4.2**: 모바일 반응형 대응 (Sheet를 Bottom Sheet로 변환).
- [ ] **Task 4.3**: 접근성 점검 (키보드 네비게이션).

---

## 📝 Next Step
- Phase 1 (The Specs) 부터 시작.

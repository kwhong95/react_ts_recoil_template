# 나만의 리액트 앱 빌드업 템플릿이라고 할까?

## Used?

- React
- Typescript
- React-Router-Dom V6
- Recoil.js
- Styled-Components
- React-Helmet

## ErrorBoundary?

> 하위 컴포넌트 트리의 어디에서든 Error를 기록하고 깨진 컴포넌트 트리 대신 Fallback UI를 보여준다.

### 포착되지 않는 에러

- 이벤트 핸들러
- 비동기적 코드(ex- `setTimeout` or `requestAnimationFrame` callback)
- 서버 사이드 렌더링
- 자식에서가 아닌 에러 경계 자체에서 발생하는 에러

## Atomic Design Pattern

> 가장 작은 컴포넌트 단위를 원자(Atom)로 설정하고 이를 바탕으로 상위 컴포넌트를 만들어 코드 재사용을 최대화하는 방법론

### 원자(Atoms)

> 디자인과 기능의 최소 단위, 대표적인 예로 레이블(Label), 텍스트(Text), 컨테이너(Container), 버튼(Button), 아이콘(Icon) 등이 있다.

### 분자(Molecules)

> 원자보다 한 단계 위의 컴포넌트, 대표적인 예로 입력 폼(Input Form), 네비게이션(Navigation), 카드(Card) 등이 있다. (프론트엔드 개발자들이 컴포넌트 개발 시 가장 많이 만드는 단위)

### 유기체(Organisms)

> 분자를 묶어 관리하는 컴포넌트, 입력 폼과 함께 헤더를 감싸거나, 여러 카드를 관리하는 그리드 등이 있다.

### 템플릿(Templates)

> 여러 유기체가 모여있고 페이지 보단 낮은 단위, 여러 그리드를 묶어 하나의 템플릿 컴포넌트를 생성하는 경우가 있다.

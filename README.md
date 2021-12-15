# 나만의 리액트 앱 빌드업 템플릿이라고 할까?

## ErrorBoundary?

> 하위 컴포넌트 트리의 어디에서든 Error를 기록하고 깨진 컴포넌트 트리 대신 Fallback UI를 보여준다.

### 포착되지 않는 에러

- 이벤트 핸들러
- 비동기적 코드(ex- `setTimeout` or `requestAnimationFrame` callback)
- 서버 사이드 렌더링
- 자식에서가 아닌 에러 경계 자체에서 발생하는 에러

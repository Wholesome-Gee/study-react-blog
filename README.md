# React 공부

## React배우기 전에 쓰는 이유부터 알아야..🔥

- 리액트 라이브러리는 Single Page Application ( html파일이 1개만 존재 )
- 장점
  - HTML 재사용이 편리함
  - Component 단위로 개발하기 때문에 분업에 좋음
  - 비슷한 문법의 React Native를 사용하면 앱개발도 가능
  - 프론트/백엔드 파트를 분리해서 각각 개발 가능
- 단점
  - 많은 JS파일로 인해 웹페이지 크기가 커짐
  - SEO에 악영향이 있을 수 있음 (hydration 작업 필요)
  - 간단한 사이트도 코드가 복잡해짐

---

## React설치와 개발환경 셋팅..🔥

- NodeJS LTS 설치
- `npm create vite@latest`
- 파일 초기화
  - src 폴더 내 css파일 내용 초기화 ( src/App.css, src/index.css )
    ```css
    /* index.css(전역css파일) 내용추가 */
    body {
      margin: 0;
    }
    div {
      box-sizing: border-box;
    }
    ```

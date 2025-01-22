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

---

## 리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개..🔥

- JSX는 javascript에서 쓰는 html 대용품
- JSX 문법 3개
  - `className` ➡️ html 태그에 class부여
  - `{ 변수 }` ➡️ html 안에서 javascript 변수 사용
  - `style={{ fontSize:"16px", color:"red" }}` ➡️ html 태그에 style 적용
    - {{ key: value }} 형식 + key는 camelCase

---

## 중요한 데이터는 변수말고 state에 담습니다..🔥

- `let [ item, setItem ] = useState( '', [], {}, true, 123 ... )`
  - useState( )는 state의 변동사항이 생기면 HTML을 자동으로 렌더링
  - 값의 변동이 잦을 경우 변수선언보다는 state선언이 좋음

---

## 버튼에 기능개발을 해보자 & 리액트 state변경하는 법..🔥

- `let [ item, setItem ] = useState( '', [], {}, true, 123 ... )`
  - setItem은 item의 값을 재설정 후 HTML을 자동으로 재렌더링 한다.
  ```js
  let [item, setItem] = useState(0);
  setItem(item + 1);
  // item = 1
  ```

---

## array, object state 변경하는 법..🔥

- `let [ item, setItem ] = useState( [], {} )`

  - setItem( )으로 item을 변경할 땐 item의 copy본을 만들고 array/object의 spread문법을 활용

  ```js
  let [student, setStudent] = useState(['짱구','철수','훈이']

  return (
    <button onClick={()=>{
      let copy = [...student]
      copy[2] = '유리'
      setStudent(copy)
    }}
  )
  ```

---

## Component : 많은 div들을 한 단어로 줄이고 싶으면..🔥

- **Component** : html 덩어리들을 하나의 기능으로 묶는 문법
  - component는 PascalCase
  ```jsx
  function App() {
    return (
      <div>
        <Modal />
      </div>
    );
  }
  // Component 생성
  function Modal() {
    return (
      <div>
        <h4>Component</h4>
      </div>
    );
  }
  ```
- **Fragment** : 빈태그, JSX내 html에서 최상위 태그로 병렬된 \<div>를 사용할 때, 그 상위 태그로 사용

  ```jsx
  function App() {
    return (
      <>
        <div></div>
        <div></div>
      </>
    );
  }
  ```

---

## 리액트 환경에서 동적인 UI 만드는 법 (모달창만들기)..🔥

- 동적인 UI 만드는 Step

  - html, css로 미리 동적인 UI 박스를 디자인 해놓는다.
  - UI 박스를 state로 저장한다.
  - state(false/true)로 UI를 보였다,숨겼다 한다.

  ```jsx
  // Modal component를 동적인 UI로 만들기
  function App () {
    let [Modal, setModal] = useState(false)

    return (
      <div>
        <button onClick(){()=>{ setModal(!modal) }}> Modal </button>
          {modal ? <Modal/> : null}
      </div>
    )
  }
  ```

---

## map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때..🔥

- JSX내의 html에서 반복문을 사용하고 싶다면 map 함수 사용
- `Array.map(()=>{ return })`

  - Array.map은 callback함수를 갖고, 새로운 Array데이터를 return한다.

  ```jsx
  function App() {
    let [따봉, 따봉변경] = useState([0, 1, 2]);
    return 따봉.map(() => {
      return <div>👍🏻 {따봉} </div>;
    });
  }
  // [ <div>👍🏻 0 </div>, <div>👍🏻 1 </div>, <div>👍🏻 2 </div> ]
  // JSX는 html내의 [],{}를 자동으로 제거함
  ```

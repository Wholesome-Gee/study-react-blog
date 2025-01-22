// 터미널에 warning message가 보기 싫다면 '/* eslint-disable */'

import { useState } from 'react'
import './App.css'

function App() {
  const [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학'])
  let [따봉, 따봉변경] = useState([0,0,0])
  let [modal, setModal] = useState(false)
  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>

      <button onClick={()=>{
        let copy = [...글제목]
        copy.sort()
        글제목변경(copy)
      }}>가나다순 정렬</button>

      <button onClick={()=>{
        let copy = [...글제목]
        copy[0] = '여자코트 추천'
        글제목변경(copy)
        }}>글수정</button>

      {글제목.map((글제목,index)=>{
        return (
          <div className="list" key={index}>
            <h4>
              {글제목} 
              <span onClick={()=>{ 
                let copy = [...따봉] // [0 0 0 ]
                copy[index] += 1 
                따봉변경(copy) 
              }}>👍🏻</span> 
              {따봉[index]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        )
      })}
      {
        modal ? <Modal/> : null
      }
    </div>
  )
}

function Modal() {
  return (
    <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App

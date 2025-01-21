import { useState } from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState('')

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  )
}

export default App

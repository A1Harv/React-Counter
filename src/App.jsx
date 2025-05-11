import './App.css'
import { useState } from 'react'

function App() {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const resetText = () => {
    setText('')
  }

  const sentenceCount = text.trim().split(/[.!?]+/).filter(Boolean).length
  const characterCount = text.length
  const wordcount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="container">
      <div className="towrite">
        <textarea
          placeholder='Write your text'
          value={text}
          onChange={handleChange}
          rows={10}
        />
      </div>
      <div className="count">
        <h3>Sentences: {text.trim() ? sentenceCount : 0}</h3>
        <h3>Characters: {characterCount}</h3>
        <h3>Words : {wordcount}</h3>
      </div>
      <div className="dele">
        <button className="delete" onClick={resetText}>Delete</button>
      </div>
    </div>
  )
}

export default App;

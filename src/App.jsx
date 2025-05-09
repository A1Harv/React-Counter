import './App.css'
import { useState } from 'react'

function App() {
  //constants define

  const[counter,setcounter] = useState(0);

  const button1fn = () => {
    setcounter(counter+1);
  }

  const button2fn = () => {
    setcounter(counter-1);
  }

  const reloadfn = () => {
    setcounter(0);
  }


  return (
    <div className="App">
      <div className="container">
      <button onClick={reloadfn} className="reload">Reload</button>
        <div className="total_count_container" style={{
          backgroundImage: `linear-gradient(to right, rgba(253, 230, 90, 1), rgba(204, 254, 87, 1))`,
        }}>
          <h1>Counter</h1>
          <h3 className="counter">{counter}</h3>
    
        </div>
        <div className="button_collection">
          <form>
            <button onClick={button1fn} className="btn-1" type='button'>+</button>
            <button onClick={button2fn} className="btn-2" type='button'>-</button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default App;
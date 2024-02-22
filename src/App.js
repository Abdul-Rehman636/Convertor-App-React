import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const [text, setText] = useState(para);

  function para() {
    alert("Your final answer is " + count);
  }

  return (
    <div id='div-1'>
      <div id='div-2'>
        <button id='button-1' onClick={() => {
          setCount(count+1)
        }}>Increase +</button>
        <div id='div-3'>
          <h1>{count}</h1>
        </div>
        <button id='button-2' onClick={() => {
          setCount(count-1)
        }}>Decrease -</button>
        <button id='button-3' onClick={para}>Submit</button>
      </div>
    </div>
  );
}

export default App;
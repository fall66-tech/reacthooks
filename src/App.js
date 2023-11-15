
import { useState } from 'react';
import './App.css';


function App() {

  const [count , SetCount] = useState(0)
  const inc = () => {
    SetCount(count + 1);
  }
  const dec = () => {
      SetCount(count > 0 ? count-1 : 0);  
  }


  return (
    <div className="App">
    <button onClick={dec}>-</button>
      <span> {count} </span>
      <button onClick={inc}>+</button>
      <br />
      <button onClick={()=> SetCount(0)}>reset</button>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Count from './Count';

function App() {

  const [advice, setAdvice ]= useState(null);
//the state to update the number of times the user pressed at the getAdvice button.
const [count, setCount] = useState(0);

  const getAdvice = async ()  =>{
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip)
    console.log(data.slip.advice);
    setCount((counter) => count + 1)
  }
  useEffect(function (){
    getAdvice()
  },[])
  return (
    <div className="App">
      <div>The ADVICE APP: react js</div>
      <button onClick={getAdvice}>Get Advice</button>
      <div>
        <h1>Today's advice</h1>
        
        <Count count={count}/>
        {advice ? (
          <p key={advice.id}>{advice.advice}</p>
        ):<p>NO advice Yet!</p>}
      </div>
    </div>
  );
}

export default App;

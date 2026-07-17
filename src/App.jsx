import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  
 const [step, setStep] = useState(1);


  
const increase = () => {
  setCount(prev => prev + step);
};

const decrease = () => {
  setCount(prev => (prev >= step ? prev - step : 0));
};


    

const reset = () => {
  setCount(0);
};



  return (
    <div>
      <h1>Counter App</h1>

      <h2>{count}</h2>
      
      <button onClick={increase}>Increase by {step}</button>
      <button onClick={decrease} disabled={count < step}>
        Decrease by {step}
      </button>
      <button onClick={reset} disabled={count === 0}>
        Reset
      </button>

      <label> Step: 
<select
  value={step}
  onChange={(e) => setStep(Number(e.target.value))}
>
  <option value={1}>1</option>
  <option value={5}>5</option>
  <option value={10}>10</option>
</select></label>
    </div>
  );
}



export default App; 
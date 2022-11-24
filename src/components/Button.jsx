import { useState } from 'react';
import './button.css';

export default function Button() {
  const [number, setNumber] = useState(0);

  function inputNumber(e) {
    if(number === 0) {
      setNumber(e.target.value);
    } else {
      setNumber(number + e.target.value);
    }
    
  }

  function clear(e) {
    setNumber(0);
  }

  return (
      <div className='wrapper'>
        <h2 className="result">{number}</h2>
        <button onClick={inputNumber} value={7}>7</button>
        <button onClick={inputNumber} value={8}>8</button>
        <button onClick={inputNumber} value={9}>9</button>
        <button onClick={inputNumber} value={4}>4</button>
        <button onClick={inputNumber} value={5}>5</button>
        <button onClick={inputNumber} value={6}>6</button>
        <button onClick={inputNumber} value={1}>1</button>
        <button onClick={inputNumber} value={2}>2</button>
        <button onClick={inputNumber} value={3}>3</button>
        <button onClick={inputNumber} value={0}>0</button>
        <button className='clear' onClick={clear}>Apagar</button>
    </div>
  );
}
import './component.css';
import { useState } from 'react';
import calculate from '../logic/calculate';
import CommentSpace from './getQuotes';

function CalculatorUI() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleChange = (obj, button) => {
    const newObj = calculate(obj, button);
    setData(newObj);
  };
  function Buttons(prop) {
    const { digit, name } = prop;
    return <button type="button" name={name} className="button" onClick={() => handleChange(data, `${name}`)}>{digit}</button>;
  }

  return (
    <div className="main">
      <div className="container">
        <div className="screen">

          <p className="number">{data.next || data.total || '0'}</p>
        </div>
        <div className="buttons">
          <Buttons digit="AC" name="AC" />
          <Buttons digit="±" name="+/-" />
          <Buttons digit="%" name="%" />
          <Buttons digit="÷" name="÷" />
          <Buttons digit="7" name="7" />
          <Buttons digit="8" name="8" />
          <Buttons digit="9" name="9" />
          <Buttons digit="×" name="x" />
          <Buttons digit="4" name="4" />
          <Buttons digit="5" name="5" />
          <Buttons digit="6" name="6" />
          <Buttons digit="-" name="-" />
          <Buttons digit="1" name="1" />
          <Buttons digit="2" name="2" />
          <Buttons digit="3" name="3" />
          <Buttons digit="+" name="+" />
          <Buttons digit="0" name="0" />
          <Buttons digit="." name="." />
          <Buttons digit="=" name="=" />
        </div>
        <CommentSpace />
      </div>
    </div>

  );
}

export default CalculatorUI;

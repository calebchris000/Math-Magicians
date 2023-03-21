import './component.css';

function Buttons(prop) {
  const { digit } = prop;
  return <div className="button">{digit}</div>;
}

function CalculatorUI() {
  return (
    <div className="container">
      <div className="screen"><p className="number">0</p></div>
      <div className="buttons">
        <Buttons digit="AC" />
        <Buttons digit="±" />
        <Buttons digit="%" />
        <Buttons digit="÷" />
        <Buttons digit="7" />
        <Buttons digit="8" />
        <Buttons digit="9" />
        <Buttons digit="×" />
        <Buttons digit="4" />
        <Buttons digit="5" />
        <Buttons digit="6" />
        <Buttons digit="-" />
        <Buttons digit="1" />
        <Buttons digit="2" />
        <Buttons digit="3" />
        <Buttons digit="+" />
        <Buttons digit="0" />
        <Buttons digit="." />
        <Buttons digit="=" />
      </div>
    </div>
  );
}

export default CalculatorUI;

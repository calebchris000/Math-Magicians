import './component.css';

function Buttons(prop) {
  const { dig } = prop;
  return <div className="button">{dig}</div>;
}

function CalculatorUI() {
  return (
    <div className="container">
      <div className="screen"><p className="number">0</p></div>
      <div className="buttons">
        <Buttons dig="AC" />
        <Buttons dig="±" />
        <Buttons dig="%" />
        <Buttons dig="÷" />
        <Buttons dig="7" />
        <Buttons dig="8" />
        <Buttons dig="9" />
        <Buttons dig="×" />
        <Buttons dig="4" />
        <Buttons dig="5" />
        <Buttons dig="6" />
        <Buttons dig="-" />
        <Buttons dig="1" />
        <Buttons dig="2" />
        <Buttons dig="3" />
        <Buttons dig="+" />
        <Buttons dig="0" />
        <Buttons dig="." />
        <Buttons dig="=" />
      </div>
    </div>
  );
}

export default CalculatorUI;

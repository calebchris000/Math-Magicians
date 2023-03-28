import './home.css';

const Header = () => (
  <nav className="header">
    <h1>Math Magicians</h1>

    <div className="navigation">
      <a href="/">Home</a>
      <a href="/calculator">Calculator</a>
      <a href="/quote">Quote</a>
    </div>
  </nav>
);

export default Header;

import mLogo from "../../../memory.png";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img src={mLogo} />
      <h2>Memory Game</h2>
    </div>
  );
}

export default Header;

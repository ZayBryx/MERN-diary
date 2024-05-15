import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>LOGO</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Diary</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../utils/logo.png";

export default function Header(props) {
  let linkToHome = "/";
  let linkToAbout = "/about";

  return (
    <header className="header">
      <Link to={linkToHome}>
        <img src={logo} alt="Kasa" className="header__logo" />
      </Link>
      <div className="header__nav">
        <Link
          to={linkToHome}
          className={`header__nav__link ${
            props.page === linkToHome && "underline"
          }`}
        >
          Accueil
        </Link>
        <Link
          to={linkToAbout}
          className={`header__nav__link ${
            props.page === linkToAbout && "underline"
          }`}
        >
          A Propos
        </Link>
      </div>
    </header>
  );
}

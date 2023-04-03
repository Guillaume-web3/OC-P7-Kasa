import "./header.css"
import { Link } from "react-router-dom"
import logo from "../../utils/logo.png"

export default function Header() {
 return (
    <header className="header">
        <img src={logo} alt="Kasa" className="header__logo" />
        <div className="header__nav">
            <Link to="/" className="header__nav__link">Accueil</Link>
            <Link to="/about" className="header__nav__link">A Propos</Link>
        </div>
    </header>
 )
}

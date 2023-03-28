import "./header.css"
import { Link } from "react-router-dom"
import logo from "../../utils/logo.png"

export default function Header() {
 return (
    <div className="header">
        <img src={logo} alt="Kasa" className="headerLogo" />
        <div className="nav">
            <Link to="/" className="link">Accueil</Link>
            <Link to="/about" className="link">A Propos</Link>
        </div>
    </div>
 )
}
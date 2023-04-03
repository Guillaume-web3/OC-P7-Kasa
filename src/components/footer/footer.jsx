import "./footer.css"
import whiteLogo from "../../utils/white-logo.png"

export default function Footer() {
 return (
    <footer className="footer">
        <img src={whiteLogo} alt="Kasa" className="footer__logo" />
        <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
 )
}
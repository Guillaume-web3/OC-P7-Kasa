import "./footer.css"
import whiteLogo from "../../utils/white-logo.png"

export default function Footer() {
 return (
    <div className="footer">
        <img src={whiteLogo} alt="Kasa" className="footerLogo" />
        <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </div>
 )
}
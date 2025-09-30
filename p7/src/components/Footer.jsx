import logoWhite from "../assets/logo-white.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <img className="footer__logo" src={logoWhite} alt="Kasa" />
                <p className="footer__legal">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

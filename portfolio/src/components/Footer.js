import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return(
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: waynekimutai20@gmail.com</p>
            </div>
            <div>
                <h1>Socials</h1>
                <div className="social-icons">
                    <a href="https://www.instagram.com/wayne_vt"><i><FaInstagram></FaInstagram></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
import Logo from "../assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} />
            </div>
            <div className="footer-icons">
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebookF />
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Qualidade</span>
                <span>Ajuda</span>
                <span>Depoimento</span>
                <span>Contato</span>
                <span>Trabalho</span>
            </div>
            <div className="footer-section-columns">
                <span>(35) 99948-2180</span>
                <span>pcastro@sga.pucminas.br</span>
                <span>pedrohbcastro2002@gmail.com</span>
            </div>
            <div className="footer-section-columns">
               <span> Termos & Condições</span> 
               <span> Privacidade & Política</span> 
            </div>
        </div>
    </div>
}

export default Footer
import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
  return <div id="about" className="about-section-container">
    <div className="about-background-image-container">
        <img src={AboutBackground}/>
    </div>
    <div className="about-section-image-container">
        <img src={AboutBackgroundImage}/>   
    </div>
    <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
            Comida Saudável é Uma Parte Importante de Uma Dieta Balanceada
        </h1>
        <p className="primary-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex veniam vitae, reiciendis quae commodi et libero dolore corrupti. Minus, cumque!
        </p>
        <p className="primary-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex veniam vitae, reiciendis quae commodi et libero dolore corrupti. Minus, cumque!
        </p>
        <div className="about-buttons-container">
            <button className="secondary-button">Leia mais</button>
            <button className="watch-video-button"> <BsFillPlayCircleFill/> Veja o vídeo</button>
        </div>
    </div>

  </div>
}

export default About
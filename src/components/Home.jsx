import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../assets/home-banner-background.png"
import BannerImage from "../assets/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi"


const Home = () => {
    return <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} />
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                    Sua Comida Favorita Fresca e Quente
                </h1>
                <p className="primary-text">
                    Entregamos sua comida fresca e quente, para que você possa aproveitar o melhor da sua refeição.
                </p>
                <button className="secondary-button">
                    Compre Agora <FiArrowRight />
                </button>
            </div>
            <div className="home-image-container">
                <img src={BannerImage} />
            </div>

        </div>
    </div>

}

export default Home

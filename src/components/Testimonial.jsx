import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";


const Testimonial = () => {
  return <div id="testimonial" className="work-section-wrapper">
    <div className="work-section-top">
        <p className="primary-subheading">Depoimentos</p>
        <h1 className="primary-heading">O que Eles Estão Dizendo</h1>
        <p className="primary-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis expedita odio necessitatibus animi officia!</p>
    </div>
    <div className="testimonial-section-bottom">
        <img src={ProfilePic} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, necessitatibus.</p>
        <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />      
        </div>
        <h2>John Doe</h2>   
    </div>
  </div>
}

export default Testimonial
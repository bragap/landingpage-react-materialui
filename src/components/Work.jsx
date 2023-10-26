import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";


function Work() {
  const workInfoData = [
    {
      image: PickMeals,
      id:1,
      title: "Escolha sua refeição",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ipsum quas perspiciatis tempore provident nemo."
    },
    {
      image: ChooseMeals,
      id:2,
      title: "Escolha com que frequência",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ipsum quas perspiciatis tempore provident nemo."
    },
    {
      image: DeliveryMeals,
      id:3,
      title: "Entregas rápidas",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ipsum quas perspiciatis tempore provident nemo."
    },
  ]

  return <div className="work-section-wrapper">
    <div className="work-section-top">
      <p className="primary-subheading"> Trabalho</p>
      <h1 className="primary-heading"> Como funciona</h1>
      <p className="primary-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptate, temporibus officiis enim aliquam vel cum excepturi quisquam dolorem, soluta suscipit?
      </p>
    </div>
    <div className="work-section-bottom">
      {workInfoData.map((data) => (
        <div className="work-section-info" key={data.id}>
          <div className="info-boxes-img-container">
            <img src={data.image}/>
          </div>
          <h2>{data.title}</h2> 
           <p>{data.text}  </p>
        </div>
      ))}
    </div>
  </div>
}

export default Work
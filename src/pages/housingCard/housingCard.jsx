import ImageSlider from "../../components/imageSlider/imageSlider";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Accordion from "../../components/accordion/accordion";
import Tag from "../../components/tag/tag";
import Rating from "../../components/rating/rating";
import housings from "../../datas/logements.json";
import "./housingCard.css";
import { useParams } from "react-router-dom";
import ErrorPage from "../error/error";

export default function HousingCard() {
  let { id } = useParams();
  console.log(id);

  const housing = housings.find((housing) => housing.id === id); // Extraction des datas concernant le bon id
  if (!housing) {
    return <ErrorPage />;
  }

  return (
    <div>
      <Header />
      <main className="housingCard">
        <ImageSlider pictures={housing.pictures} />
        <div className="housingCard__header">
          <div className="housingCard__header__house">
            <h1 className="housingCard__header__house__h1">{housing.title}</h1>
            <h2 className="housingCard__header__house__h2">
              {housing.location}
            </h2>
            <div className="housingCard__header__house__tags">
              {housing.tags.map((tag, index) => {
                return <Tag tag={tag} key={index} />;
              })}
            </div>
          </div>
          <div className="housingCard__header__hostInfos">
            <div className="housingCard__header__hostInfos__host">
              <span className="housingCard__header__hostInfos__host__name">
                {housing.host.name}
              </span>
              <img
                className="housingCard__header__hostInfos__host__picture"
                src={housing.host.picture}
                alt={housing.host.name}
              />
            </div>
            <Rating
              className="housingCart__header__hostInfos__rate"
              rating={housing.rating}
              ratemax={5}
            />
          </div>
        </div>
        <div className="housingCard__houseInfos">
          <Accordion
            className="housingCard__houseInfos__accordion"
            title="Description"
            content={housing.description}
          />
          <Accordion
            className="housingCard__houseInfos__accordion"
            title="Equipements"
            content={
              <ul>
                {" "}
                {housing.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}{" "}
              </ul>
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

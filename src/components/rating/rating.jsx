import greyStar from "../../utils/star-grey.png";
import orangeStar from "../../utils/star-orange.png";
import "./rating.css";

// Doit recevoir "ratemax" et "rating" en props
export default function Rating(props) {
  return (
    <div
      className="rating"
      aria-label={`Evalution ${props.rating} sur ${props.ratemax}`}
    >
      {/* Construction d'un tableau de taille "ratemax" */}
      {[...Array(props.ratemax)].map((star, index) => {
        index += 1;
        return (
          <img
            className="rating__star"
            src={
              props.rating >= index ? orangeStar : greyStar
            } /* Choix de l'image à utiliser en fonction de l'opérateur ternaire : si la note est supérieur ou égale à l'index (= index +1) parcouru : orangeStar, sinon greyStar */
            alt=""
            key={index}
          />
        );
      })}
    </div>
  );
}

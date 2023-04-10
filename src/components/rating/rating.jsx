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
      {[...Array(props.ratemax)].map((star, index) => {
        index += 1;
        return (
          <img
            className="rating__star"
            src={props.rating >= index ? orangeStar : greyStar}
            alt=""
            key={index}
          />
        );
      })}
    </div>
  );
}

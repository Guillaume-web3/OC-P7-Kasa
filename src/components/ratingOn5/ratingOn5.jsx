import greyStar from "../../utils/star-grey.png"
import orangeStar from "../../utils/star-orange.png"
import "./ratingOn5.css"

export default function RatingOn5(props) {

    return (
        <div className="rating" aria-label={`Evalution ${props.rate} sur 5`}>
            <img className="rating__star" src={props.rating >= 1 ? orangeStar : greyStar} alt="" />
            <img className="rating__star" src={props.rating >= 2 ? orangeStar : greyStar} alt="" />
            <img className="rating__star" src={props.rating  >= 3 ? orangeStar : greyStar} alt="" />
            <img className="rating__star" src={props.rating  >= 4 ? orangeStar : greyStar} alt="" />
            <img className="rating__star" src={props.rating  >= 5 ? orangeStar : greyStar} alt="" />
        </div>
    )
}
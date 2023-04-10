import "./card.css";
import { Link } from "react-router-dom";
import logements from "../../datas/logements.json";

export default function Card() {
  return (
    <ul className="cards">
      {logements.map((logement) => (
        <li key={logement.id} className="card">
          <Link to={"/housingCard/" + logement.id} className="card__link">
            <img
              className="card__cover"
              src={logement.cover}
              alt={logement.title}
            />
            <p className="card__title">{logement.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

import "./card.css"

export default function Card({id, cover, title,}) {
    return (
        <li key={id} className="card">
            <img className="card-cover" src={cover} alt={title} />
            <p className="card-title">{title}</p>
        </li>
       
    )
   }
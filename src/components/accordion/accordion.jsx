import React from "react";
import { useState } from "react";
import arrowDown from "../../utils/arrow-down.png";
import "./accordion.css";

export default function Accordion(props) {
  const [active, setActive] = useState(false); // Déclaration de la variable d'état à l'état initial "false"
  const handleToggle = () => {
    setActive(!active);
  }; // Bascule de l'état de l'accordéon

  return (
    <div className={`accordion ${active && "active"} ${props.className}`}>
      {/* si active est true, on lui défini la className "active" sinon on ne fait rien*/}
      <div className="accordion__title" onClick={handleToggle}>
        {/* Appel de la fonction de basculement d'état en cas d'évènement click */}
        {props.title}
        <img className="accordion__icon" src={arrowDown} alt="" />
      </div>
      <div className="accordion__content">{props.content}</div>
    </div>
  );
}

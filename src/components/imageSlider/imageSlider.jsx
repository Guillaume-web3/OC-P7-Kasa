import React from "react";
import { useState } from "react";
import arrowBack from "../../utils/arrow-back.png";
import arrowForward from "../../utils/arrow-forward.png";

import "./imageSlider.css";

export default function ImageSlider({ pictures }) {
  const [current, setCurrent] = useState(0); // Déclaration de la variable d'état à l'état initial "0"
  const length = pictures.length; // Nombre d'images

  /* Gestion de la navigation suivante et précédente */
  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1); // Si image actuelle = derniere image : bascule sur la premiere image. Sinon, image suivante
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1); // Si image actuelle = premiere image : bascule sur la derniere image. Sinon, image précédente
  }

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    // Si pas de tableau avec les images ou tableau vide, rien n'est renvoyé
    return null;
  } else if (pictures.length === 1) {
    // Si une seule image dans le tableau, les fleches et le pageCounter ne sont pas envoyés
    return (
      <div>
        <img src={pictures} alt="" className="slide__image" />
      </div>
    );
  } // Si plusieurs image dans le tableau :
  return (
    <div className="slider">
      <img
        className="slider__arrowBack"
        src={arrowBack}
        alt="Page précédente"
        onClick={prevSlide}
      />
      <img
        className="slider__arrowForward"
        src={arrowForward}
        alt=""
        onClick={nextSlide}
      />
      <p className="slider__pageCounter">
        {current + 1}/{length}
      </p>
      {pictures.map((picture, index) => {
        return (
          /* Définition de l'image courante comme "active" */
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {/* Ajout de <img> seulement pour l'image courante */}
            {index === current && (
              <img src={picture} alt="" className="slide__image" />
            )}
          </div>
        );
      })}
    </div>
  );
}

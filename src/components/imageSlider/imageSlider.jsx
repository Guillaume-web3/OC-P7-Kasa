import React from 'react'
import { useState } from 'react'
import arrowBack from "../../utils/arrow-back.png"
import arrowForward from "../../utils/arrow-forward.png"

import "./imageSlider.css"

export default function ImageSlider({pictures}) {
    const [current, setCurrent] = useState(0)
    const length = pictures.length

    function nextSlide () {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    function prevSlide () {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(pictures) || pictures.length <= 0) {
        return null;
    }

  return (
    <div className='slider'>
        <img className="slider__arrowBack" src={arrowBack} alt="Page précédente" onClick={prevSlide} />
        <img className="slider__arrowForward" src={arrowForward} alt="" onClick={nextSlide} />
        <p className='slider__pageCounter'>{current + 1}/{length}</p>
        {pictures.map((picture, index) => {
            return (
                <div className={index === current ? "slide active" : "slide"} key={index}>
                    {index === current && (<img src={picture} alt="" className='slide__image'/>)}
                </div>
            )        
        })}
    </div>
  )
}

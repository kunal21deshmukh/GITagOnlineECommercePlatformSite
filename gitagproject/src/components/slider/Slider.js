import React from 'react';
import { useState,useEffect } from 'react';
import {ArrowLeftCircle,ArrowRightCircle} from 'react-bootstrap-icons';
import { sliderData } from './slider-data';
import './Slider.css';
function Slider() {
    const [currentSlide,setCurrentSlide]=useState(0) //0 is index of 1st slide
  const sliderLengh=sliderData.length;
  //slidelength aplyla slider-data madhe kiti obj ghetlet array madhe te detay
  //sliderLength= 1 2 ...
  //currentSlide= 0 1 ...

  const autoScroll=true;
  let slideInterval;
  let intervalTime=5000;

  const nextSlide=()=>{
      //last slide aali ani arrow click kela ki 1st slide la yayla havay i.e currentSlide has to be index as 0
      setCurrentSlide(currentSlide===sliderLengh-1 ? 0:currentSlide+1);
  }
  
  const prevSlide=()=>{
    //last slide aali ani arrow click kela ki 1st slide la yayla havay i.e currentSlide has to be index as 0
    setCurrentSlide(currentSlide===0 ? sliderLengh-1 :currentSlide-1);
}
  
 function auto(){
     slideInterval=setInterval(nextSlide,intervalTime)
 }
  
 useEffect(()=>{
    setCurrentSlide(0)
},[]);

  useEffect(()=>{
      if(autoScroll)
      {
          auto();
      }
      return ()=>clearInterval(slideInterval);//messup thambvoto
  },[currentSlide]);


    return (
    <div className="slider">
        <ArrowLeftCircle className="arrow prev" onClick={prevSlide}/>
        <ArrowRightCircle className="arrow next" onClick={nextSlide}/>
    
        {sliderData.map((slide,index)=>{
            return(
                
                <div className={index===currentSlide ? "slide current" : "slide"} key={index}>
                 
                 {index===currentSlide && ( //&& means then
                   <div>
                   <img src={slide.image} alt="slide" />
                   <div className="content">
                       <h4>{slide.desc}</h4>
                   </div>
                   </div>
                 )}   
                </div>
            )
        })}
    </div>
  );
};

export default Slider;
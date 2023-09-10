import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import  frame  from '../assets/shadowbox.jpg';
import  bottle  from '../assets/Bottle.jpg';
import terracota from "../assets/Terracota.JPG"


const Services = () => {
  return (
    <div className='services'>

        <Carousel className='carousel'
        infiniteLoop autoPlay showStatus={false}
        interval={2500}
        >

         <div>
            <img className='image' src={ frame } alt="Image1"></img>
            <p className='legend'>3d frame</p>
         </div>

         <div>
            <img src={ bottle } alt="Image2"></img>
            <p className='legend'>Bottle Painting</p>
         </div>

         <div>
            <img src={ terracota } alt="Image3"></img>
            <p className='legend'>Terracota Painting</p>
         </div>

        </Carousel>
        </div>
  )
}

export default Services
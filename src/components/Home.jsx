import React from 'react'
import desc from "../assets/description.png"
import {AiFillGoogleCircle,AiFillYoutube,AiFillInstagram,AiFillAmazonCircle} from "react-icons/ai"


const Home = () => {
  return (
    <>
    <div className='home' id='Home'>
     
     <main>
     <h1>Little Things</h1> 
       <p>" Tiny Crafts, Huge Smiles "</p>
     </main>

      </div>
      <div className='home2'>
        <img src={desc} alt='graphics'></img>
        <div>
          <p>
           Crafts carved with care, designed with devotion.
           Dive into a diorama of dreams and designs. 
           From traditional terracotta to mesmerizing mandalas. 
           Relish the rhythm of radiant artistry. 
           Celebrate our canvas of culture and creativity.
          </p>
        </div>
      
      </div>
      <div className="home3" id='About'>
          <div>
            <h1>
              Who we are?
            </h1>
            <p>
            "We are a passionate team united by a shared vision – to create and innovate. 
            At Lil things, we believe in the power of our products,
             and our mission is to deliver excellence in every facet of our work.
            Drawing from our rich history, we constantly evolve, 
            embracing change and driving progress. Integrity, commitment, and community define us, 
            and we're dedicated to fostering growth and making a lasting impact."
            </p>
          </div>
        </div>
        <div className="home4" id='Brands'>
          <div>
            <h1>Brands</h1>
            <article>
              <div style={
                {
                  animationDelay: "0.3s"
                }
              }>
                <AiFillGoogleCircle />
                <p>Google</p>
              </div>

              <div style={
                {
                  animationDelay: "0.5s"
                }
              }>
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </div>

              <div style={
                {
                  animationDelay: "0.7s"
                }
              }>
                <AiFillYoutube />
                <p>Youtube</p>
              </div>

              <div style={
                {
                  animationDelay: "1s"
                }
              }>
                <AiFillInstagram />
                <p>Instagram</p>
              </div>
            </article>
          </div>
        </div>
    </>
    
  )
}

export default Home
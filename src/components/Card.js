import React from 'react'
import './card.css'
import {FcLikePlaceholder} from 'react-icons/fc'
const Card = (props) => {
   let courses=props.courses;
  //  function buttonHandler()
  //   {
      
  //   }
  return (
    <div className='card'>
      <div className="title">
        <h3>{courses.title}</h3>
      </div>
      <div className="image">
         <img src={courses.image.url} alt="" />
      </div>
      <div className="likeunlikediv">
        <FcLikePlaceholder/>
      </div>
      <div className="description">
            <p>{courses.description}</p>
      </div>
    </div>
  )
}

export default Card

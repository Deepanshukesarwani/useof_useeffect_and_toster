import React from 'react'
import { useState } from 'react';
import Card from './Card'
import './cards.css'
const Cards = (props) => {
    let ApiData=props.courses;
    let category=props.category;
    const [likeded,setliked]=useState([]);

    //function for data passing in card
    function getdata(){
      if(category==="All")
      {
        let allcourses=[];
    Object.values(ApiData).forEach(array=>{
        array.forEach(courseData=>{
          allcourses.push(courseData);
        })
    })
      return allcourses;
      }
      else{
        return ApiData[category];
      }
    }

    //function of toaster of like course

    // function tostgenerator(){

    // }
  return (
    
    <div className='cardswrapper'>
      <div className='cardsdiv'>
      {
        getdata().map((courses)=>{
            return(
                <Card key={courses.id} courses={courses} likeded={likeded} setliked={setliked} />   
            )
        })
      }
      </div>
    </div>
  )
}

export default Cards

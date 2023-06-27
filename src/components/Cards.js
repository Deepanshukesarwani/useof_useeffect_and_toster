import React from 'react'
import Card from './Card'
import './cards.css'
const Cards = (props) => {
    let ApiData=props.courses;
    let category=props.category;

    console.log(ApiData[category]);
    console.log("printing category");
    console.log(category);
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
  return (
    
    <div className='cardswrapper'>
      <div className='cardsdiv'>
      {
        getdata().map((courses)=>{
            return(
                <Card key={courses.id} courses={courses} />   
            )
        })
      }
      </div>
    </div>
  )
}

export default Cards

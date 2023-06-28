import React from 'react'
import './card.css'
import {FcLikePlaceholder,FcLike} from 'react-icons/fc'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = (props) => {
   let courses=props.courses;
   let likededcourse=props.likeded;
   let setlikedcourse=props.setliked;
  //  let like=0;
function toastgenerator(){
  if(likededcourse.includes(courses.id))
  {
    // console.log("unlike")
    // like=0;
    setlikedcourse((previousState)=>previousState.filter((cid)=>(cid!==courses.id)));
    console.log("unliked")
    toast.warning("like is removed");
  }
  else{
    if(likededcourse.length===0)
    {
      setlikedcourse([courses.id]);
      // toast.success("liked")
      console.log("like")
      // like=1
    }
    else{
      setlikedcourse((prev)=>[...prev,courses.id])
      // like=1;
      console.log("like")
    }
    toast.success("liked")
  }

}
  return (
    <div className='card'>
      <ToastContainer />
      <div className="title">
        <h3>{courses.title}</h3>
      </div>
      <div className="image">
         <img src={courses.image.url} alt="" />
      </div>
      <div className="likeunlikediv">
        
          <button onClick={toastgenerator}>
            {
              (likededcourse.includes(courses.id))?<FcLike/>:<FcLikePlaceholder/>
            }
            {/* <FcLikePlaceholder/> */}
          </button>

        
      </div>
      <div className="description">
            <p>{courses.description}</p>
      </div>
    </div>
  )
}

export default Card

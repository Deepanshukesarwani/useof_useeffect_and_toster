import React, { useEffect,useState } from "react";
import {apiUrl,filterData}  from "./data";
import Navbar from './components/Navbae'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { toast } from "react-toastify";
import './app.css'

const App = () => {
 const [apidata,setdata]=useState([])
 const [dataloaded,setdataloaded]=useState();
 const[category,setcategory]=useState('All');
   async function fetchdata(){
    setdataloaded(false);
    try{
     let responce= await fetch(apiUrl);
     let output=await responce.json();
     setdata(output.data);
    }
    catch(error)
    {
      toast.error("problem at network");   
    }
    setdataloaded(true);
     }
   useEffect(()=>{
    fetchdata();
   },[])
  return <div >
    <Navbar/>
    <div className="mainwrapper">
    <Filter Filter={filterData} category={category} setcategory={setcategory}></Filter>
    {
      dataloaded?<Cards courses={apidata}  category={category} setcategory={setcategory} />:null
    
    }
    </div>
    
  </div>;
};

export default App;

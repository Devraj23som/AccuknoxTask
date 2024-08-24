'use client'
"use strict";
import React, { useEffect, useState } from 'react'
import { RiSearch2Fill } from '@remixicon/react'
import { useSelector } from 'react-redux'
const resultpage = () => {
  // const [allwidgets, setallwidgets] = useState([])
  const [searchdata, setsearchdata] = useState('');
  const [resultData, setresultData] = useState([])
  let allwidgets=useSelector((state)=>state.widgets.allWidgets);
  let searchQuery=searchdata.toLowerCase();

  
  
  const submitHandler=()=>{
    // setallwidgets([...allwidgets,data])
    let result=  allwidgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchQuery))
    
    setresultData(result);
    console.log(searchQuery)
};

  return (
    <div className='bg-slate-300 w-full h-screen'>
      <div className=" flex justify-center nav w-full h-16">
       <div className='flex items-center'> <input className='search' placeholder='search widget' value={searchdata} onChange={(e)=>setsearchdata(e.target.value)} type="text" />
        <RiSearch2Fill
        color='white'
        // cursor={PointerEvent}
        size={30}
        onClick={()=>submitHandler()}
        /></div>
      </div>
    <div className='container flex gap-5 '>
    {resultData.length>0?(resultData.map((data,index)=>(
          <div className='container  relative widget bg-white  '>
       
          <h3 className='text-xl'> {data.name}</h3>
          <h4 className='text-center text'>{data.text}</h4>
         
         </div>
        ))):(
          <p>no results</p>
        )}
    </div>

  </div>
  )

}
export default resultpage;
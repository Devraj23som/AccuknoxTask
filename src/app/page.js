'use client'
import React, { useEffect, useRef, useState } from 'react'
import { chartdata } from './data'
import { useDispatch, useSelector } from 'react-redux';
// import  from 'next/navigation';
import AddWidget from './component/AddWidget/addWidget';
import { RiCloseLine } from '@remixicon/react';
import { removeWidget } from './store/widgetSlice';
import { useRouter } from 'next/navigation';
const page = () => {
  const router=useRouter();
  const categories=useSelector((data) => data.widgets.categories);
  let catbox=useRef(null);
  const dispatch =useDispatch();
  const [widgetIndicate, setwidgetIndicate] = useState(false)
  const [catdata, setcatdata] = useState('')
  const widgetHandler=(e)=>{
    // console.log(e)
    setcatdata(e)
      setwidgetIndicate(true)
    
   
  }
  const pageHandler=(e)=>{
    // console.log(e)
   router.push('/Results')
    
   
  }
  

  const [isClient, setIsClient] = useState(false);
const data=useSelector((state=>state));
console.log(data)
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a placeholder/spinner
  }
  const handleRemove = (e) => {
    // console.log(e)
    dispatch(removeWidget({ category:e.category, widgetId:e.id }));
  };
 

  return (
    <>
    <div className="relative main bg-slate-300 w-full h-screen" >
    <div className='w-full flex items-center justify-between px-2 bg-gray-900' ><h1 className='text-2xl text-white'>Dashboard Categories</h1>
    
    <button onClick={()=>pageHandler()} className='bg-white w-28'><h2 className='text-base'>Search widgets</h2></button>
    <button onClick={()=>widgetHandler()} className='bg-white w-28'><h2 className='text-base'>+ Add widget</h2></button>
    </div>
    {Object.keys(categories).map((category)=>(
     <div className='mt-5' key={{category}}>
      <h2 className='ml-5 text-lg'>{category}</h2>
      <div className='pl-5 widgetBox overflow-x-auto gap-5'>{categories[category].map((data)=>(
      <div className='container relative widget bg-white  '>
       
       <h3 className='text-xl'> {data.name}</h3>
       <h4 className='text-center text'>{data.text}</h4>
       <RiCloseLine 
       onClick={()=>handleRemove({category,id:data.id})}
       className='absolute top-2 right-5'
       color="red"
       />
      </div>
      ))}
       <div className='widget flex items-center justify-center bg-slate-200'>
       <h2 ref={catbox}  className='cursor-pointer' onClick={()=>widgetHandler(category)}>+add widget</h2>
      </div>
     
      </div>
     </div>
    ))}
    {widgetIndicate ? <AddWidget catdata={catdata} widgetIndicate={widgetIndicate} setwidgetIndicate={setwidgetIndicate}/> : ""}
    </div>
    
    </>
  )
}

export default page
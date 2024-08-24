'use client'
import { addWidget } from '@/app/store/widgetSlice';
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const AddWidget = ({catdata,widgetIndicate,setwidgetIndicate}) => {

//  box.current.style.backgroundColor='red';
    const [widgetName, setWidgetName] = useState('');
    const [SelectedCategory, setSelectedCategory] = useState(catdata)
    const [widgetText, setWidgetText] = useState('');
    const dispatch = useDispatch();
    const {widgets}= useSelector((state)=>state);
    let categoriesList=widgets.categories;
    const [categoryList, setcategoryList] = useState(Object.keys(categoriesList))
    

console.log(categoryList)

    const handleAddWidget = () => {
      if(widgetName=="" || widgetText==""  ){
      return  alert('please fill the box')
      }
      const newWidget = {

        id: Date.now(),
        name: widgetName,
        text: widgetText,
      };
      dispatch(addWidget({ category:SelectedCategory, widget: newWidget }));
      setWidgetName('');
      setWidgetText('');
      setwidgetIndicate(false)
    };
  
    return (
      <>

      <div className='container flex items-center justify-center bg-opacity-30 absolute bg-slate-600 w-2/4 h-full top-0 right-0'>
      <div>
        <select className='selectlist' value={SelectedCategory}  onChange={(e) => setSelectedCategory(e.target.value)}>
      {categoryList.map((data)=>(
        <option value={data}>{data}</option>
      ))}
        </select>
      </div>
      <div  style={{ padding: '10px' }}>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          required={true}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={widgetText}
          required={true}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <button className='bg-green-500 text-white' onClick={handleAddWidget}>Add Widget</button>
        <button onClick={()=>setwidgetIndicate(false)} className='bg-red-600 text-white'>Cancel</button>
      </div>
      </div>
      </>
    );
}

export default AddWidget;
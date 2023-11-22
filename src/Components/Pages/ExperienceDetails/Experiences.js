import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {  Card, Divider } from '@mui/material'
import '../../css/Global.css'
import DateSelect from '../../DateSelect'
import ControlButtons from '../../ControlButtons'
import Carousel from 'react-material-ui-carousel'
import ExpDetails from './ExpDetails'
import AddButton from '../../AddButton'
import DeleteItemButton from '../../DeleteItemButton'
import useFormSubmit from "../../../Custom Hooks/useFormSubmit";

const initialization=	{
    details: {
        company: "",
        jobTitle: "",
        description: "",
    },
    duration: { start: '', end: '', }
}

function Experiences() {
    const store=useSelector((state)=>state.experiences);
    const [dataList,setDataList] =useState([{...initialization},]);
    const {handleSubmit,errors}=useFormSubmit();

    useEffect(()=>{
        setDataList([...store])
    },[store])
    const submitForm=(e)=>{
        e.preventDefault();
        handleSubmit("experiences",dataList)
    }

  return (
    <>
    <Card id='form-card-wrapper'>
        <form className='form-wrapper'onSubmit={submitForm}>
            <h2>Job Experiences</h2>
        {dataList && 
            <Carousel stopAutoPlayOnHover className="form-carousel-wrapper" navButtonsAlwaysInvisible
            activeIndicatorIconButtonProps={{ style: { color: 'red', width: "1.5rem" } }}>
        {dataList.map((exp,index)=>(
            <div key={index+'#'+crypto.randomUUID}>
                {dataList.length>1&& (<DeleteItemButton setData={setDataList} delIndex={index}/>)}
               <ExpDetails storeData={exp.details}
               getData={inp=>setDataList(prevList=>{
                return prevList.map((item,i)=>index===i?{...item,details:{...inp}}:item)
               })} errors={errors?.filter((item,i)=>item.key===i)}/>
               <Divider/>
                <DateSelect storeData={exp.duration}
                getData={inp=>setDataList(prevList=>{
                    return prevList.map((item,i)=>index===i?{...item,duration:{...inp}}:item)
                   })} errors={errors?.filter((item,i)=>item.key===i)}/>
            </div>))}
            </Carousel>
        }
        <AddButton setData={setDataList} init={initialization}/>
        <ControlButtons back={"/details/profession"} submit={submitForm} />
        </form>
    </Card>
    </>
  )
}

export default Experiences
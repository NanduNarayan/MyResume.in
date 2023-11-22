import { CircleSharp } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import './css/PrintList.css'



function PrintList({ data }) {
  const modifiedData=useDataList(data);
  console.log(modifiedData);
  return (
    <>{modifiedData &&
      modifiedData.map((item,index) => (
        <div className='list-item' key={index + "#" + crypto.randomUUID}>
          <section className='title'>
            <CircleSharp fontSize='small' sx={{ paddingRight: "10px" }} />
            <Typography
              variant='h6' fontWeight={500}
              sx={{ width: "60%" }}
            >
              {item.title}
            </Typography>
            <Typography align="right" variant='subTitle' fontStyle="italic" color="gray">
               {item.duration?.start} -  {item.duration?.end}
            </Typography>
          </section>
          <section className='details' style={{ paddingLeft: "20px" }}>
            {item.info.map((info,i)=>(
              <Typography key={"info-#"+i}
              variant='body1'
              fontStyle="italic"
              >
                {isNaN(info)?info:(info>10?`Score : ${info}%`:<Rating size='medium' value={info} readOnly/>)}
              </Typography>
            ))}
          </section>
        </div>
      ))
    }</>
  )
}
const useDataList = (data) => {
  function handleRemaining(data) {
    const arr=[];
    for(let i=0; i<Object.keys(data).length; i++) {
      arr[i]=Object.values(data)[i];
    }
    return arr;
  }

  function createNewList(data) {
    const clone=structuredClone(data);
    const newList = clone.map((item) => {
      const newItem = {};
      if(Object.keys(item).includes("duration")){
        newItem.duration={...item.duration};
        const {duration,...rest}=item;
        let remaining={...Object.values(rest)[0]};
        newItem.title=Object.values(remaining)[0];
        delete remaining[Object.keys(remaining)[0]]
        newItem.info=handleRemaining(remaining)
      }else{
        newItem.title=Object.values(item)[0];
        delete item[Object.keys(item)[0]];
        newItem.info=handleRemaining(item);
      }
      return newItem;
  })
    return newList;
  }
  const [list,setList] =useState([])
  useEffect(() => {
   setList(createNewList(data));

   return ()=>{
    setList([]);
   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  return list;
}

export default PrintList;





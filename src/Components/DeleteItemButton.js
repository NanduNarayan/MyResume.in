import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteItemButton({setData, delIndex, isSkillsPage=false}) {
    const deleteHandle=()=>{
        if(isSkillsPage) {
            setData(prevData=>{
                const updatedList=prevData.skills.filter((item,i)=>i!==delIndex?{...item}:null);
                return {...prevData,skills:[...updatedList]};
            })
        }else{
            setData(prevData=>prevData.filter((item,i)=>i!==delIndex?{...item}:null))
        }
    }
  return (
    <>
    <IconButton aria-label="delete" color="#fff" onClick={()=>deleteHandle()}>
  <DeleteIcon style={{color:"red"}} />
</IconButton>
    </>
  )
}

export default DeleteItemButton
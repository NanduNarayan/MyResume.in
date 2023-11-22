import { CircleSharp } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react';
import './css/ListEducation.css'

function ListEducation({educationData}) {
  return (
    <>{ educationData &&
        educationData.map((item,index)=>(
            <div className='course' key={index+"#"+crypto.randomUUID}>
                <section className='institute-title'>
                   <CircleSharp fontSize='medium' sx={{paddingRight:"10px"}}/>
                   <Typography
                    variant='h6' fontWeight={500}
                   >
                    {item.courseData.institute}
                   </Typography> 
                   <Typography align="right"variant='subTitle' fontStyle="italic" color="gray">
                    ( {item.duration?.start} -  {item.duration.end})
                   </Typography>
                </section>
            </div>
        ))
    }</>
  )
}

export default ListEducation
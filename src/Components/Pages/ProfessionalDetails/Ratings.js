import React,{useEffect, useState} from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

function Ratings({itemRating,getRating}) {
    const[value,setValue]=useState(2.5);
    const [hover,setHover]=useState(-1);
    useEffect(()=>{
     if(itemRating!==value){
      setValue(itemRating);
      setHover(itemRating)
     }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <>
     <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
    
      }}
    >
      <Rating
        name="rating"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(prevValue=>prevValue===newValue?prevValue:newValue);
          getRating(value)
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55}} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2,    color:'#212529'  }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box></>
  )
}

export default Ratings
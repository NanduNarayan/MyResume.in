import React from 'react';
import { Button } from '@mui/material';
import './css/ControlButtons.css'
import { useNavigate } from 'react-router';
import useFormSubmit from '../Custom Hooks/useFormSubmit';


function ControlButtons({back, submit}) {
  const navigate=useNavigate();
  const {handleSubmit}=useFormSubmit;
 return (
    <>
    <section className="control-btns">
    <Button variant="contained" id="back-btn" type='button' name="back"
    onClick={()=>navigate(`${back}`)} >Back</Button>
    <Button variant="contained"  type='submit' name="next" onClick={submit}
     >Next</Button>
    </section>
    </>
  )
}

export default ControlButtons
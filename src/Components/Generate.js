import { SentimentVerySatisfiedSharp } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function Generate() {
  const [isLoading,setIsLoading]=useState(false);
  const navigate=useNavigate();
  const generateBtnClick=()=>{
    setIsLoading(prevState=>!prevState)
    setTimeout(()=>{
      navigate("/resume/preview");
      setIsLoading(prevState=>!prevState);
    },1500)
  }
  return (
    <>
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Box >
          <section>
            <Typography
              variant='h2'
              component='h1'
              fontWeight={600}
              align='center'
            >
              All Set!!!
            </Typography>
          </section>
          <section>
            <Typography
              variant="h4"
              align='center'
            >
              Looks like we have all the information we need to generate your own
              personalized resume!
            </Typography>
          </section>
          <section style={{display:"flex",justifyContent: 'center'}}>
            <SentimentVerySatisfiedSharp sx={{ color: "#ff9e00", fontSize: 80 }} />
          </section>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",alignItems: 'center',justifyContent: 'center'}}>
          <Typography>
            Click on the button below to view your resume.
          </Typography>
          <Button variant="contained" disabled={isLoading} onClick={generateBtnClick}>{isLoading ? "Loading..." : "Generate"}</Button>
        </Box>
      </Container>

    </>
  )
}

export default Generate

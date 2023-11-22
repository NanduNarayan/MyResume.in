import { Box, Container, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import "./css/Preview.css"
import PrintList from './PrintList';
import { EmailRounded, LocalPhoneRounded, LocationOnRounded } from '@mui/icons-material';


function DataGroup({ heading, children }) {
    return (
        <Box>
            <Typography
                variant='h5'
                fontWeight={500}
            >
                {heading}
            </Typography>
            <Divider variant='middle' sx={{ padding: ".5px", backgroundColor: "black" }} />
            {children}
        </Box>)
}

function Preview() {
    const store = useSelector(state => state);
    const { personal, education, profession, experiences } = store;
    const { name, contacts, address } = personal;
    return (
        <>
            <Container>
                <Paper id="paper" elevation={3} square >
                    <Box className="title-block">
                        <Typography align='center' variant="h3" >
                            {`${name.firstName.toUpperCase()} ${name.lastName.toUpperCase()}`}
                        </Typography>
                        <Typography align='center' variant="h4" >
                            {profession.jobRole}
                        </Typography>
                    </Box>
                    <DataGroup heading="Objective">
                        <Typography variant="body1" paragraph mt={2} paddingLeft={"10px"}>
                            {profession.summary}
                        </Typography>
                    </DataGroup>
                    <DataGroup heading="Education">
                        <PrintList data={education} />
                    </DataGroup>
                    <DataGroup heading="Experience">
                        <PrintList data={experiences} />
                    </DataGroup>
                    <DataGroup heading="Skills">
                        <PrintList data={profession.skills} />
                    </DataGroup>
                    <DataGroup heading="Contact Me">
                        <Typography 
                        variant="body1" 
                        mt={2} paddingLeft={"10px"}>
                            <EmailRounded/> {contacts.email}
                        </Typography>
                        <Typography 
                        variant="body1" 
                        mt={2} paddingLeft={"10px"}>
                            <LocalPhoneRounded/> {contacts.phone}
                        </Typography>
                        <Typography 
                        variant="body1" 
                        display={'flex'}
                        mt={2} paddingLeft={"10px"}>
                            <LocationOnRounded/>
                            <span >
                                <Typography
                                variant='body2'

                                >
                                    {address.location}, <br></br>
                                    {address.street},<br></br>
                                    {address?.landmark||null}<br></br>
                                    PIN : {address.pin}
                                </Typography>
                            </span>
                        </Typography>
                    </DataGroup>
                </Paper>
            </Container>
        </>
    )
}

export default Preview
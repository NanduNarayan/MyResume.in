import React, { useState, useEffect } from 'react';
import '../../css/Global.css';
import '../../css/Inputs.css';
import { Box, Divider } from '@mui/material';

function ContactsInput({ storeData, updater, errors }) {
  const [data, setData] = useState({ phone: "", email: "" });

  useEffect(() => {
    setData({ ...storeData })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeData])
 
  const handleInputChange=(e)=>{
    const {name,value} = e.target;
    setData(prevData=>{return {...prevData,[name]:value}});
  }
  return (
    <>
      <Box  id="contacts-wrapper"onBlurCapture={() => updater(data)}>
        <section className='item' >
          <label className="main-label">Email<span><b style={{color:"red"}}>*</b></span></label>
          <input name='email' type='email' className={`icon-left inp-class ${data?.email?"filled":(errors?.email?"empty":null)}`}
            defaultValue={data.email} required
            onChange={handleInputChange} />
          {/* {(errors.emailWarning &&
            <label className='warning-label'>{errors.emailWarning}</label>)} */}
        </section>
        <section className='item'>
          <label className="main-label">Phone Number<span><b style={{color:"red"}}>*</b></span></label>
          <input name='phone' type='tel' maxLength={14}
            className={`icon-left inp-class ${data?.phone?"filled":(errors?.phone?"empty":null)}`} onChange={handleInputChange} required
            defaultValue={data.phone} />
          {/* {(errors.phoneWarning &&
            <label className='warning-label'>{errors?.phoneWarning}</label>)} */}
        </section>
        <Divider style={{color:"black"}}/>
      </Box >
    </>
  )
}

export default ContactsInput
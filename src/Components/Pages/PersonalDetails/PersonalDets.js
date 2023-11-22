import React, { useEffect, useState } from 'react';
import { Card} from '@mui/material';
import {  useSelector } from 'react-redux';
import ControlButtons from '../../ControlButtons';
import AddressInput from './AddressInput';
import ContactsInput from './ContactsInput';
import NameInput from './NameInput';
import '../../css/Global.css'
import useFormSubmit from '../../../Custom Hooks/useFormSubmit';

const initialize={name: {
  firstName: "",
  lastName: "",
},
contacts: {
  phone: "",
  email: "",
},
address: {
  location: "",
  street: "",
  landmark: "",
  pin: "",
}}

function PersonalDets() {
  const store=useSelector((state)=>state.personal);
  const [data, setData] = useState({...initialize});
  const {handleSubmit,errors}=useFormSubmit();

  useEffect(()=>{
    setData({...store})
  },[store])
  const submitForm=(e)=>{
    e.preventDefault();
    handleSubmit("personal",data)
  }
  return (
    <>
      <Card id="form-card-wrapper">
        <h2 >Personal Details</h2>
        <form className="form-wrapper" onSubmit={submitForm}>
          <NameInput updater={inp=>setData(prevData=>{
            const updatedName={...prevData};
            updatedName.name={...inp};
            return updatedName;
          })} storeData={data.name} errors={errors}/>
          <ContactsInput updater={inp=>setData(prevData=>{
            const updatedContacts={...prevData};
            updatedContacts.contacts={...inp};
            return updatedContacts;
          })} storeData={data.contacts} errors={errors}/>
          <AddressInput updater={inp=>setData(prevData=>{
            const updatedAddress={...prevData};
            updatedAddress.address={...inp};
            return updatedAddress;
          })} storeData={data.address} errors={errors}/>
          <ControlButtons back={"/"} submit={submitForm} />
        </form>
      </Card>
    </>)
}
export default PersonalDets;
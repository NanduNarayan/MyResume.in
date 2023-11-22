import {isEmail,isMobilePhone} from 'validator';

export const personalFormValidate=(data)=>{
const newErrors={};
let isValid=true;
const {name,contacts,address} = data;
if(!name.firstName){
    newErrors.firstName=true;
    isValid=false;
}
if(!name.lastName){
    newErrors.lastName=true;
    isValid=false;
}
if(!contacts.phone){
    newErrors.phone=true;
    isValid=false;
}
if(!contacts.email){
    newErrors.email=true;
    isValid=false;
}
if(!address.location){
    newErrors.location=true;
    isValid=false;
}
if(!address.street){
    newErrors.street=true;
    isValid=false;
}
if(!address.pin){
    newErrors.pin="Enter a valid pincode";
    isValid=false;
}
if (!isMobilePhone(contacts.phone, 'en-IN')){
    newErrors.phoneWarning="Please enter a valid phone number";
    isValid=false;
}
if(!isEmail(contacts.email)){
    newErrors.emailWarning="Please enter a valid email";
    isValid=false;
}
return {"isValid":isValid,"newErrors":newErrors?{...newErrors}:{}};
}

export const educationFormValidate=(dataList)=>{
    const newErrors=[];
    dataList.forEach((item,i) => {
        const error={};
        if(!item.courseData.institute){
            error.institute=true;
        }
        if(!item.courseData.field){
            error.field=true;
        }
        if(!item.courseData.percentage){
            error.percentage=true;
        }
        if(!item.duration.start){
            error.start=true;
        }
        if(!item.duration.end){
            error.end=true;
        }
        if(Object.keys(error).length!==0){
            error.key=i;
            newErrors.push(error);
        }
    })
    return {isValid:newErrors.length===0,newErrors:newErrors}};

export const professionFormValidate=(data)=>{
    const newErrors={};
    const {skills,jobRole,summary} = data;
    if(!summary){
        newErrors.summary=true;
    }
    if(!jobRole) {
        newErrors.jobRole=true;
    }
    const skillErrors=[];
    skills.forEach((item,index)=>{
        const error={};
        if(!item.skillName){
            error.skillName=true;
        }
        if(!item.rating){
            error.rating=true;
        }
        if(Object.keys(error).length!==0){
            error.key=index;
            skillErrors.push(error);
        }
    })
    if(skillErrors.length){
        newErrors.skillErrors=[...skillErrors];        
    }
    return {isValid:Object.keys(newErrors).length===0,newErrors:newErrors}
}

export const experiencesFormValidate=(dataList)=>{
    const newErrors=[];
    dataList.forEach((item,index)=>{
        const error={};
        const {details,duration}=item;
        if(!details.company){
            error.company=true;
        }
        if(!details.description){
            error.description=true;
        }
        if(!details.jobTitle){
            error.jobTitle=true;
        }
        if(!duration.start){
            error.start=true;
        }
        if(!duration.end){
            error.end=true;
        }
        if(Object.keys(error).length){
            error.key=index;
            newErrors.push(error)
        }
    })
    return {isValid:newErrors.length===0,newErrors:newErrors}
}
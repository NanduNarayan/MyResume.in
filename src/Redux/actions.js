import { EDUCATION_UPDATE, PERSONAL_UPDATE,PROFESSION_UPDATE, EXPERIENCES_UPDATE } from './actionTypes';

export const personalDataAction=(data)=>({
    type:PERSONAL_UPDATE,
    payload:data,
});
export const educationAction=(data)=>({
    type:EDUCATION_UPDATE,
    payload:data,
});
export const professionAction=(data)=>({
    type:PROFESSION_UPDATE,
    payload:data,
});
export const experiencesAction=(data)=>({
    type:EXPERIENCES_UPDATE,
    payload:data,
});
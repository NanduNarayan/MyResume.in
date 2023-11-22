import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../Utils/customTheme";

const lightBackground="linear-gradient(to top , #F8F9FA,#DEE2E6,#E9ECEF)";
const darkBackground="linear-gradient(to bottom ,#212529,#495057,#343a40)";

export const useCustomTheme=()=>{
    const [darkMode,setDarkMode]=useState(setThemeByTime);
    const[color,setColor]=useState(`${lightBackground}`);
    const [theme,setTheme]=useState({});
    useEffect(()=>{
        setTheme(darkMode?darkTheme:lightTheme);
        setColor(darkMode?darkBackground:lightBackground);
    },[darkMode])
    
    const toggleMode=()=>{
        setDarkMode(currentMode=>!currentMode);
    }
    
    return {theme,color,toggleMode};
};
const setThemeByTime=(setDarkMode)=>{
    const time=new Date(Date.now()).getHours();
    if(time>=18){
        return true;
    }else{return false;}
 }
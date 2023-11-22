
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
//Redux Files
import rootReducer from "./Redux/reducer";
import initialState from "./Redux/initialState";
//mui DatePicker initialization
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
//CSS
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Themes
import { ThemeProvider } from "@mui/material";
import { useCustomTheme } from "./Custom Hooks/useCustomTheme";
//Components
import PersonalDets from './Components/Pages/PersonalDetails/PersonalDets'
import Education from './Components/Pages/EducationDetails/Education'
import Profession from './Components/Pages/ProfessionalDetails/Profession'
import Experiences from './Components/Pages/ExperienceDetails/Experiences'
import PageNotFound from './Components/Pages/404/PageNotFound'
import Generate from "./Components/Generate";
import Preview from "./Components/Preview";

const Home = lazy(() => import('./Components/Pages/Home/Home'))
const reduxStore = configureStore({
  reducer: rootReducer,
  devTools: true,
  preloadedState: initialState,
})


function App() {
  const { theme, color, toggleMode } = useCustomTheme();
  document.body.style.backgroundImage = `${color}`;
  return (
    <Provider store={reduxStore}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar toggle={toggleMode} />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Suspense fallback={<div className="loader">Loading...</div>}><Home /></Suspense>} />
              <Route path='/details/personal' element={<PersonalDets />} />
              <Route path='/details/education' element={<Education />} />
              <Route path='/details/profession' element={<Profession />} />
              <Route path='/details/experiences' element={<Experiences />} />
              <Route path="/resume/generate" element={<Generate />} />
              <Route path="/resume/preview" element={<Preview />} />
              <Route path='/*' element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;




import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useContext } from 'react';
import {useTheme, createTheme, ThemeProvider, Box} from '@mui/material';
import SignInSide from './pages/GoGreenLogin';
import theme from './pages/GoGreenTheme';
import SignUpSide from './pages/GoGreenSignUp';
import NavBar from './components/GoGreenNavBar';
import GoGreenProfile from './pages/GoGreenProfile';
import GoGreenDashboard from './pages/GoGreenDashboard';
import GoGreenFootprint from './pages/GoGreenFootprint';
import GoGreenPractice from './pages/GoGreenPractice';
import GoGreenCommunity from './pages/GoGreenCommunity';
import GoGreenInfo from  './pages/GoGreenInfo';
import {LoggedInProvider} from './pages/LoggedInContext';
import UserContext from "./pages/user-context";
import { UserContextProvider } from "./pages/user-context";

function App() {
 
  

  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<SignUpSide />}/>
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/profile" element={<GoGreenProfile />} />
          <Route path="/dashboard/:user_id" element={<GoGreenDashboard />}/>
          <Route path="/footprint" element={<GoGreenFootprint />}/>
          <Route path="/practice" element={<GoGreenPractice />}/>
          <Route path="/community" element={<GoGreenCommunity />}/>
          <Route path="/info" element={<GoGreenInfo />}/>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
      </UserContextProvider> 
  );
}
 

export default App;
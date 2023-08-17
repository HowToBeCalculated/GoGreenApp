import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useContext } from 'react';
import {useTheme, createTheme, ThemeProvider, Box} from '@mui/material';
import theme from './pages/GoGreenTheme';
import SignUpSide from './pages/GoGreenSignUp';
import NavBar from './components/GoGreenNavBar';
import GoGreenProfile from './pages/GoGreenProfile';
import GoGreenDashboard from './pages/GoGreenDashboard';
import GoGreenFootprint from './pages/GoGreenFootprint';
import GoGreenPractice from './pages/GoGreenPractice';
import GoGreenNotifications from "./pages/GoGreenNotifications";
import GoGreenActivityLog from "./pages/GoGreenActivityLog";
import GoGreenSettings from "./pages/GoGreenSettings";
import GoGreenInfo from "./pages/GoGreenInfo";
import GoGreenQuiz from "./pages/GoGreenQuiz";
import GoGreenTransportation from "./pages/GoGreenTransportation";
import GoGreenHouseholds from "./pages/GoGreenHouseHold";
import GoGreenFood from "./pages/GoGreenFood";
import GoGreenPersonalCare from "./pages/GoGreenPersonalCare";
import { UserContextProvider } from "./pages/user-context";

function App() {
  

  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<SignUpSide />}/>
          <Route path="/profile" element={<GoGreenProfile />} />
          <Route path="/dashboard" element={<GoGreenDashboard />}/>
          <Route path="/footprint" element={<GoGreenFootprint />}/>
          <Route path="/practice" element={<GoGreenPractice />}/>
          <Route path="/info" element={<GoGreenInfo />}/>
          <Route path="/notifications" element={<GoGreenNotifications />} />
          <Route path="/activitylog" element={<GoGreenActivityLog />} />
          <Route path="/settings" element={<GoGreenSettings />} />
          <Route path="/quiz" element={<GoGreenQuiz />} />
          <Route path="/transportation" element={<GoGreenTransportation />} />
          <Route path="/household" element={<GoGreenHouseholds />} />
          <Route path="/food" element={<GoGreenFood />} />
          <Route path="/personalcare" element={<GoGreenPersonalCare />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
      </UserContextProvider> 
  );
}
 

export default App;

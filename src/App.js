import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Kriterien from './components/Kriterien';
import Mail from './components/Mail'; 
import { useEffect, useState } from 'react';
import { DarkModeContext } from './components/DarkMode';

function App() {

  const[isDarkMode, setIsDarkMode] = useState(false);
  const [emailLength, setEmailLength] = useState("medium");
  const [politeness, setPoliteness] = useState("formal");
  const [complexity, setComplexity] = useState("medium");
  
  const [tone, setTone] = useState("professional");
  const [audience, setAudience] = useState("colleagues");
  const [purpose, setPurpose] = useState("inform");
  const [address, setAddress] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("")


  const toggleDarkMode = () =>{
    setIsDarkMode(prevMode => !prevMode);
  }

  useEffect(() =>{
    document.body.setAttribute("data-theme", isDarkMode ? "dark": "light");
  }, [isDarkMode])

  return (
    <div>
      <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        <Header/> 
        <NavBar/>
        <Kriterien
          emailLength={emailLength} 
          setEmailLength={setEmailLength} 
          politeness={politeness} 
          setPoliteness={setPoliteness} 
          complexity={complexity} 
          setComplexity={setComplexity} 
          tone={tone} 
          setTone={setTone} 
          audience={audience} 
          setAudience={setAudience} 
          purpose={purpose} 
          setPurpose={setPurpose} 
          address={address} 
          setAddress={setAddress} 
          additionalInfo={additionalInfo} 
          setAdditionalInfo={setAdditionalInfo}/>
        <Mail/> 
      </DarkModeContext.Provider>
    </div>
   
  )
}

export default App;

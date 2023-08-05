import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Kriterien from './components/Kriterien';
import Mail from './components/Mail'; 
import { useEffect, useState } from 'react';
import { DarkModeContext } from './components/DarkMode';
import { reformulateEmail as reformulateEmailAPI } from './components/ConvertedMail';

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

  const [emailText, setEmailText] = useState("");
  const [hasFormulated, setHasFormulated] = useState(false);
  const [reformulateEmail, setReformulateEmail] = useState("")
  
  

  const handleSubmit = async() =>{
      const criteriaData = {
        emailLength,
        politeness,
        complexity,
        tone,
        audience,
        purpose,
        address,
        additionalInfo,
      };

      try{
        const result = await reformulateEmailAPI(criteriaData, emailText);
        if (result.choices && result.choices.length > 0) {
          setReformulateEmail(result.choices[0].text.trim());
          setHasFormulated(true);
        } else{
          console.log("Keine Antwort von der API erhalten.");
        }
      } catch (error){
        console.log("Fehler beim Aufrufen der API:", error)
      }
  }


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
        <Mail emailText = {emailText} setEmailText = {setEmailText} hasFormulated = {hasFormulated} setHasFormulated={setHasFormulated} handleSubmit= {handleSubmit}/> 
        <div className='reformulated-email-container'>
            <p>Umformulierte E-Mail:</p>
                {true && (
          
            <div className='reforumlated-email-box'>{reformulateEmail}Hier steht text und sehr großer text.</div>
          
        )}
        </div>
      </DarkModeContext.Provider>
    </div>
   
  )
}

export default App;

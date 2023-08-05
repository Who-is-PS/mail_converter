import React, { useState } from "react";


export default function Mail({emailText,setEmailText, hasFormulated, setHasFormulated, handleSubmit}){

    
    const handleChange = (event) =>{
        setEmailText(event.target.value);
       
    };

    // // const handleSubmit = () =>{
    //     console.log("Ergebnis der Umformulierung: ",emailText);
    //     setHasFormulated(true);
    // }

    return(
        <div className="mail-container">

            <label className="mail-label">
                E-Mail oder Stichwörter eingeben:
                </label> 
                <textarea 
                value={emailText}
                onChange={handleChange}
                style={{resize: "none"}}
                cols={62}
                rows={7}
                placeholder="z.B.: Melde mich krank, da ich Übelkeit und starke Kopfschmerzen habe."/>
             
            <button onClick={handleSubmit} className="rewrite">{hasFormulated ? "Nicht zufrieden? Erneut umformulieren": "Umformulieren"}</button>
          
        </div>
    )
}
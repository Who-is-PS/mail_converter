import React, { useState, useTransition } from "react";


export default function Kriterien({ 
    emailLength, setEmailLength,
    politeness, setPoliteness, 
    complexity, setComplexity,
    tone, setTone, 
    audience, setAudience, 
    purpose, setPurpose, 
    address, setAddress, 
    additionalInfo, setAdditionalInfo }){

        
    const [showInfoMail, setShowInfoMail] = useState(false);
    const [showInfoPoliteness, setShowInfoPoliteness] = useState(false)
    const [showInfoComplexity, setShowInfoComplexity] = useState(false)
    const [showInfoTone, setShowInfoTone] = useState(false)
    const [showInfoAudience, setShowInfoAudience] = useState(false)
    const [showInfoPurpose, setShowInfoPurpose] = useState(false)
    const [showInfoAddress, setShowInfoAddress] = useState(false)
    const [showInfoAdditionalInfo, setShowInfoAdditionalInfo] = useState(false)
   
    

    const handleChange = (event) => {
        setAddress(event.target.checked)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleInformation = (event) =>{
        setAdditionalInfo(event.target.value)
    }

    return(
        <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
            <label className="form-label">
                Länge der Mail: 
                <span 
                className="question-mark"
                onClick={()=> setShowInfoMail(!showInfoMail)}
                
                 >
                ?
                </span>

                {
                showInfoMail && 
                <div className="info-box">
                    Die Länge der E-Mail kann kurz, mittel oder lang sein.
                </div>
                }

                <select className="form-select" value={emailLength} onChange={option => setEmailLength(option.target.value)}>
                    <option value="short">Kurz</option>
                    <option value="medium">Mittel</option>
                    <option value="long">Lang</option>
                </select>
            </label>
            <label className="form-label">
                Höflichkeit:
                <span
                className="question-mark"
                onClick={() => setShowInfoPoliteness(!showInfoPoliteness)}
                >
                    ?
                </span>
                { showInfoPoliteness &&
                <div className="info-box">
                    <ul>
                        <li>"Formal": Ideal für professionelle Kontexte</li>
                        <li>"Höflich": Respektvolle Kommunikation</li>
                        <li>"Unter Freunden": Lockere, informelle Kommunikation</li>
                        <li>"Sachlich": Klare, direkte Kommunikation</li>
                    </ul>
                </div>}

                <select className="form-select" value={politeness} onChange={option => setPoliteness(option.target.value)}>
                    <option value="formal">Formal</option>
                    <option value="polite">Höflich</option>
                    <option value="casual">Unter Freunden</option>
                    <option value="neutral">Sachlich</option>
                </select>
            
            </label>
            <label className="form-label">
                Komplexität:
                <span
                className="question-mark"
                onClick={()=>setShowInfoComplexity(!showInfoComplexity)}>
                    ?
                </span>
                {showInfoComplexity &&
                <div className="info-box">
                    <ul>
                        <li>"Einfach": Einfache Sprache und kurze Sätze</li>
                        <li>"Mittel": Balance aus Einfachheit und Detail</li>
                        <li>"Komplex": Verwendung von spezifischen Begriffen und komplexen Satzstrukturen</li>
                    </ul>
                </div>
                }
                <select className="form-select" value={complexity} onChange={option => setComplexity(option.target.value)}>
                    <option value="simple">Einfach</option>
                    <option value="medium">Mittel</option>
                    <option value="complex">Komplex</option>
                </select>
            </label>
            <label className="form-label">
                Tonalität:
                <span 
                className="question-mark"
                onClick={()=> setShowInfoTone(!showInfoTone)}
                >
                    ?
                </span>
                {showInfoTone && 
                <div className="info-box">
                    <ul>
                        <li>"Professionell": Formell und geschäftlich, ideal für professionelle Kontakte.</li>
                        <li>"Freundlich": Warm und einladend, gut für Verbindungsaufbau.</li>
                        <li>"Seriös": Ernst und direkt, für ernste Angelegenheiten.</li>
                        <li>"Humorvoll": Leicht und humorvoll, gut für lockere Kommunikation.</li>
                        <li>"Begeisternd": Energiegeladen und enthusiastisch, gut zum Motivieren.</li>
                        <li>"Respektvoll": Respektvoll und höflich, ideal für formelle und professionelle Kontakte.</li>
                        <li>"Zuvorkommend": Hilfsbereit und entgegenkommend, gut für den Kundenservice.</li>
                    </ul>
                </div>}
                <select className="form-select" value={tone} onChange={option => setTone(option.target.value)}>
                    <option value="professional">Professionell</option>
                    <option value="friendly">Freundlich</option>
                    <option value="serious">Seriös</option>
                    <option value="humour">Humorvoll</option>
                    <option value="excited">Begeisternd</option>
                    <option value="respectful">Respektvoll</option>
                    <option value="helpful">Zuvorkommend</option>
                </select>
            </label>
            <label className="form-label">
                Zielgruppe:
                <span
                className="question-mark"
                onClick={()=>setShowInfoAudience(!showInfoAudience)}>
                    ?
                </span>
                {showInfoAudience &&
                <div className="info-box">
                    <ul>
                        <li>"Kollegen": Für interne Kommunikation im Team oder unter Mitarbeitern.</li>
                        <li>"Vorgesetzte": Für Kommunikation an Manager, Teamleiter oder andere höhere Positionen.</li>
                        <li>"Kunden": Für externe Kommunikation mit Kunden, Klienten oder Geschäftspartnern.</li>
                        <li>"Persönliche Kontakte": Für informelle Kommunikation mit Freunden, Familie oder Bekannten.</li>
                    </ul>
                </div>}
                <select className="form-select" value={audience} onChange={option => setAudience(option.target.value)}>
                    <option value="colleges">Kollegen</option>
                    <option value="superior">Vorgesetze</option>
                    <option value="clients">Kunden</option>
                    <option value="personal">Persönliche Kontakte</option>
                </select>
            </label>

            <label className="form-label">
                Zweck:
                <span
                className="question-mark"
                onClick={() => setShowInfoPurpose(!showInfoPurpose)}>
                    ?
                </span>
                    {showInfoPurpose && 
                    <div className="info-box">
                        <ul>
                            <li>"Informieren": Ziel ist es, den Empfänger über bestimmte Informationen oder Neuigkeiten zu informieren.</li>
                            <li>"Überzeugen": Sie versuchen, den Empfänger zu einer bestimmten Meinung oder Handlung zu bewegen.</li>
                            <li>"Frage stellen": Sie suchen nach einer spezifischen Antwort oder Information vom Empfänger.</li>
                            <li>"Beschwerde oder Kritik": Sie äußern Unzufriedenheit oder Bedenken in Bezug auf eine Situation oder ein Verhalten.</li>
                        </ul>    
                    </div>}
                <select className="form-select" value={purpose} onChange={option => setPurpose(option.target.value)}>
                    <option value="inform">Informieren</option>
                    <option value="convince">Überzeugen</option>
                    <option value="question">Frage stellen</option>
                    <option value="critic">Beschwerde oder Kritik</option>
                </select>
            </label>

            <label className="form-label">
                <div className="checkbox-container">
                    <div>Geschlechtsneutrale Formulierung:</div>
                    <p>{address ? "Ja": "Nein"}</p>
                    <input type="checkbox"
                    checked={address}
                    onChange={handleChange} />
                </div>
            </label>
            
            <label className="form-label-info">Weitere Informationen eingeben:</label>
           
                <textarea value={additionalInfo} onChange={handleInformation}
                style={{resize: "none"}}
                cols={62}
                rows={7}
                placeholder="z.B.: "></textarea>
           

        </form>
        </div>
    )
}
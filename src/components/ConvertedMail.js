export const reformulateEmail = (criteriaData, emailContent) =>{
    return fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: "POST",
        headers: {
            "Authorization": `Bearer API KEY`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt: `Forumuliere eine E-Mail basierend auf den Kriterien: ${JSON.stringify(criteriaData)} \n\n${emailContent}`,
            max_tokens: 200
        })
    })
    .then(response =>response.json());
}




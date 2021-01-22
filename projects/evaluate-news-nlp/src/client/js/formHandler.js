function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    if (Client.validateUrl(formText) == true){

    console.log('::: Form Submitted :::');
    postData('http://localhost:8081/submit', { url: formText })
        //.then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = 
            `model: ${res.model},
            \nscore tag: ${res.score_tag},
            \nagreement: ${res.agreement},
            \nsubjectivity: ${res.subjectivity},
            \nconfidence: ${res.confidence},
            \nirony: ${res.irony}`;
        })
    }else{
        alert('Invalid URL');
    }
};
async function postData (url = '', data = {}){
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        return newData
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};
export { handleSubmit, postData }

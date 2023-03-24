const urlBase = `http://127.0.0.1:3333/`;

document.getElementById('btnSubmit').addEventListener('click', e => {
    e.preventDefault();
    handleSubmitAsync();
});

document.getElementById('url').addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        e.preventDefault();
        handleSubmitAsync();
    }
});

handleSubmitAsync = () => {
    const url = document.getElementById('url').value;

    const json = { 'original_url': url };

    const headers = { 'content-type': 'application/json' };

    fetch(urlBase, 
        { 
            method: 'post', 
            body: JSON.stringify(json), 
            headers: headers 
        })
        .then(response => response.json())
        .then(url => {
            const anchor = `<a href=${url.original_url} target="_blank">${url.original_url}</a>`;
            document.getElementById('urlResult').innerHTML = anchor; 
        }
    );
        
}
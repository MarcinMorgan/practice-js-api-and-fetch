document.addEventListener('DOMContentLoaded', init);

const btn = document.querySelector('button');

function init() {
    console.log('DOM');

    btn.addEventListener('click', () => {
        const promise = fetch('https://api.ipify.org?format=json');
        
        promise
            .then(reqJSON => reqJSON.text())
            .then(resp => { btn.nextElementSibling.innerText = JSON.parse(resp).ip})
    })
}
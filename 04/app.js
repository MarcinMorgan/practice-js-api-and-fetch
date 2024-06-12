document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const weatherBtn = document.querySelector('.form__submit');
    
    weatherBtn.addEventListener('click', element => {
        element.preventDefault();
        
        const latInput = document.querySelector('.form__field--lat');
        const lngInput = document.querySelector('.form__field--lng');
        const latOutput = document.querySelector('.weather__lat');
        const lngOutput = document.querySelector('.weather__lng')
        const weatherSummary = document.querySelector('.weather__summary');
        const weatherTemp = document.querySelector('.weather__temperature');

        const lat = parseFloat(latInput.value);
        const lng = parseFloat(lngInput.value);
        const key = ''; // key not included
        if(!isNaN(lat) && !isNaN(lng)) {
            latOutput.innerText = lat;
            lngOutput.innerText = lng;
        };

        const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}&lang=pl&units=I`);

        promise
           .then(resp => resp.text())
           .then(resp => { 
                const dataJSON = JSON.parse(resp);
                if (dataJSON.error) {
                    return Promise.reject(dataJSON.error)
                };
                const arrJSON = {...dataJSON.data};
                weatherTemp.innerText = arrJSON[0].app_temp;
                weatherSummary.innerText = arrJSON[0].weather.description;
            })
            .catch(err => alert(err));
    })

} 
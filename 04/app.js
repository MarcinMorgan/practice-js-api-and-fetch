document.addEventListener('DOMContentLoaded', init);

// https://api.weatherbit.io/v2.0/current?key=[key]&lat=[latitude]&lon=[longitude]

function init() {
    console.log('DOM');

    const weatherBtn = document.querySelector('.form__submit');
    
    weatherBtn.addEventListener('click', element => {
        element.preventDefault();
    })

}
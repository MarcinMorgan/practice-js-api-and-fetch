document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .then(() => { console.log('finish')})
        .catch(err => console.log(err))

}

function setBorderColorAsync(element, color, callback) {
    const promise = new Promise(function(resolve, reject) {
        if(element && element instanceof HTMLElement) {
            // sprawdzam czy parametr jest elementem DOM, więcej:
            // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
              
            setTimeout(() => {
                resolve(
                element.style.border = `3px solid ${color}`);
            }, Math.random() * 3000)
        } else {
            reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
        }
    });
    return promise;
}
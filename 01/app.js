document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', firstCallback)



    function firstCallback() {
        setBorderColorAsync(divList[1], 'blue', secondCallback);
    }

    function secondCallback() {
        setBorderColorAsync(divList[2], 'green', fn => {console.log('finish')});
    }

}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback(element);
    }, Math.random() * 3000);
}
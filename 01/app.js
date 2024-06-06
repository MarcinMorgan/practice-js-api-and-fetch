document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList, 0, 'red', firstCallback);

}

function firstCallback(element) {
    setBorderColorAsync(element, 1, 'blue', secondCallback);
}

function secondCallback(element) {
    setBorderColorAsync(element, 2, 'green', () => {console.log('finish')});
}

function setBorderColorAsync(element, index, color, callback) {
    setTimeout(() => {
        element[index].style.border = `3px solid ${color}`;
        callback(element);
    }, Math.random() * 3000);
}
const apiUrl = 'http://localhost:3000/users';
const addUserBtn = document.querySelector('.form__submit');
const firstNameEl = document.querySelector('.form__field--first-name');
const lastNameEl = document.querySelector('.form__field--last-name');

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addUserBtn.addEventListener('click', () => {
        const userData = {
            firstName: firstNameEl.value,
            lastName: lastNameEl.value,
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(userData)
        };
        const promisePost = fetch(apiUrl, options);

        promisePost
            .finally(loadUsers());
    })
}

function loadUsers() {   
    const promise = fetchGet(apiUrl);

    promise
        .then(data => insertUsers(data))
        .catch(err => console.error(err));
}

function fetchGet(url) {
    return fetch(url)
        .then(resp => {
            if(resp.ok) {
                return resp.json();
            }

            return Promise.reject(resp);
        });
}

function insertUsers(usersList) {
    const ulElement = document.querySelector('.users');
    ulElement.innerHTML = '';
    usersList.forEach(user => {
        const liElement = document.createElement('li');
        liElement.innerText = `${user.firstName} ${user.lastName}`;

        ulElement.appendChild(liElement);
    });
}

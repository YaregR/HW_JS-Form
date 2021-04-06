
let form = document.forms.PIB;
let btn = document.querySelector('.btn');
let elFull = document.querySelector('.name-block');
let elLast = document.querySelector('.lastname');
let elFirst = document.querySelector('.firstname');
let elMiddle = document.querySelector('.middlename');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let formData = new FormData(ev.target);

    let LName = formData.get('lastname');
    let FName = formData.get('firstname');
    let MName = formData.get('middlename');

    elLast.innerHTML = 'Прізвище: '+ LName;
    elFirst.innerHTML = "Ім'я: " + FName;
    elMiddle.innerHTML = 'По батькові: '+ MName;
});


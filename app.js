$('h1').css('color', 'red',)
const button = document.querySelectorAll('button');


const list = button.forEach(function(addUp) {
    addUp.addEventListener('click', (openUp) =>  {
        const guestPage = window.location.href = 'http://127.0.0.1:5500/create.html';
        openUp(guestPage);
    })
})
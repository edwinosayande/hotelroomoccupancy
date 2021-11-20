const form = document.querySelector('form');
const spanElement = document.getElementById('blockArea');
const spanElement1 = document.getElementById('blockArea1');
const spanElement2 = document.getElementById('blockArea2');

// const validateForm = () => {
//     let x = document.form;
//     if(x == null || x == ""){
//         nameValidation = "Guest name";
//         document.getElementById('my_button101');
//         return true;
//     }else{
//         console.log('us')
//     }
// }

const mergeForm = () => {
form.addEventListener('submit', e => {
    e.preventDefault();
    const saveInfo1 = form.names.value.trim();
    const saveInfo2 = form.deposit.value.trim();
    const saveInfo3 = form.room.value.trim();
    spanElement.innerHTML = saveInfo1;
    spanElement1.innerHTML = saveInfo2;
    spanElement2.innerHTML = saveInfo3;
    const guestDetails = window.location.href = 'http://127.0.0.1:5500/create1.html';
    console.log(guestDetails);
})
}
mergeForm();
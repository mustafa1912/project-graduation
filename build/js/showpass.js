// show & hiden password
const Password = document.getElementById('Password'),
    hideshow = document.getElementById('hideshow'),
    slash = document.getElementById('slash'),
    eye = document.getElementById('eye');
// display none to eye
hideshow.addEventListener('click', () => {
    slash.classList.toggle('d-none')
    eye.classList.toggle('d-none')
})
// set type password
slash.addEventListener('click', () => {
    Password.setAttribute('type', 'password')
})
// set type text
eye.addEventListener('click', () => {
    Password.setAttribute('type', 'text')
})
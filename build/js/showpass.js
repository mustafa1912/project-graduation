// show & hiden password
const Password = document.querySelectorAll('.Password'),
    hideshow = document.querySelectorAll('.hideshow'),
    slash = document.querySelectorAll('.fa-eye-slash'),
    eye = document.querySelectorAll('.fa-eye');
// display none to eye

eye.forEach((ele) => {
    ele.addEventListener('click', () => {

        slash.forEach((x) => {
            x.addEventListener('click', () => {
                Password[0].setAttribute('type', 'password')
                Password[1].setAttribute('type', 'password')
            })
        })


    })
})










// hideshow[i].addEventListener('click', () => {
//         slash[i].classList.toggle('d-none')
//         eye[i].classList.toggle('d-none')
//     })
//     // set type password
// slash[i].addEventListener('click', () => {
//         Password[i].setAttribute('type', 'password')
//     })
//     // set type text
// eye[i].addEventListener('click', () => {
//     Password[i].setAttribute('type', 'text')
// })
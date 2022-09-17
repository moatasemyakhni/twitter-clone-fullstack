
const container = document.getElementById('signup-container')
const name = document.getElementById('name')
const username = document.getElementById('username')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const pwd = document.getElementById('password')
const pwdRepeat = document.getElementById('password-repeat')
const dob = document.getElementById('dob')
const signupBtn = document.getElementById('signup-btn')

const callSignupFormBtn = document.getElementById('signup-page-btn')

const closeBtn = document.getElementById('x-close')
closeBtn.addEventListener('click', () => {
    container.classList.add('view-none')
})

callSignupFormBtn.addEventListener('click', () => {
    container.classList.remove('view-none')
})

const toPhoneLink = document.getElementById('to-phone')
const toEmailLink = document.getElementById('to-email')
const emailOrPhoneContainer = document.querySelectorAll('.email-phone-containers')

toPhoneLink.addEventListener('click', () => {
    emailOrPhoneContainer.forEach((cont) => {
        cont.classList.toggle('view-none')
    })
})

toEmailLink.addEventListener('click', () => {
    emailOrPhoneContainer.forEach((cont) => {
        cont.classList.toggle('view-none')
    })
})
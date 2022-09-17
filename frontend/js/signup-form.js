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
const inputs = document.querySelectorAll('.input-box')
const errSection = document.querySelector('.error-section')
const errTxt = document.getElementById('error-txt')

//validators

const setErrorMessage = (msg) => {
    errSection.classList.remove('view-none')
    errTxt.textContent = msg
}

const validators = () => {
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            //empty fields handler
            if(!input.value) {
                setErrorMessage(`${input.id} is required`)
                return
            }else {
                errSection.classList.add('view-none')
            }
            // name handler
            if(input.id === name.id) {
                const limit = 50
                const exp = /^\w{0,50}$/
                const nameVal = input.value
                if(!nameVal.match(exp)) {
                    setErrorMessage(`${input.id} should contain english characters, numbers and less than ${limit} chars`)
                    return
                }
                errSection.classList.add('view-none')
                console.log("name is true")
            }
            //username handler
            if(input.id === username.id) {
                const limit = 50
                const exp = /^@\w{0,50}$/
                const usernameVal = input.value
                if(!usernameVal.match(exp)) {
                    setErrorMessage(`${input.id} should start with '@', then english characters, numbers and less than ${limit} chars`)
                    return
                }
                errSection.classList.add('view-none')
                console.log("username is true")
            }
            //Lebanese phone handler
            if(input.id === phone.id) {
                const exp1 = /^[+]9613\d{6}$/
                const exp2 = /^[+]961(71|76|70|78)\d{6}$/
                const phoneVal = input.value
                if(!phoneVal.match(exp1) && !phoneVal.match(exp2)) {
                    setErrorMessage(`${input.value} is not a Lebanese number`)
                    return
                }
                errSection.classList.add('view-none')
                console.log('phone is true')
            }
            //email handler
            if(input.id === email.id) {
                const exp = /^(\w([\.-]?\w)*)+@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                const emailVal = input.value
                if(!emailVal.match(exp)) {
                    setErrorMessage(`Try format example@gmail.com. ${input.value} is not a valid email`)
                    return
                }
                errSection.classList.add('view-none')
                console.log('email is true')
            }
        })
    })

    if(!name.value || !username.value || (!phone.value && !email.value) || !pwd.value || !pwdRepeat.value || !dob.value) {
        setErrorMessage(`All fields are required`)
        return
    }
    if(pwd.value !== pwdRepeat.value) {
        setErrorMessage(`Passwords do not match`)
        return
    }
}

validators()

signupBtn.addEventListener('click', (e) => {

    e.preventDefault()
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

const closeBtn = document.getElementById('x-close')
closeBtn.addEventListener('click', () => {
    container.classList.add('view-none')
})

callSignupFormBtn.addEventListener('click', () => {
    container.classList.remove('view-none')
})
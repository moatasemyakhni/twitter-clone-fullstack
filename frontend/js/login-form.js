const container = document.getElementById('login-container')
const input = document.getElementById('login-input')
const pwd = document.getElementById('password')
const loginBtn = document.getElementById('signup-btn')
const errSection = document.querySelector('.error-section')
const errTxt = document.getElementById('login-error-txt')



const setErrorMessage = (msg) => {
    errSection.classList.remove('view-none')
    errTxt.textContent = msg
}

const nameValidate = () => {
    const limit = 50
    const exp = /^(\w|\s){5,50}$/
    const nameVal = name.value
    if(!nameVal.match(exp)) {
        setErrorMessage(`${name.id} should contain english characters, numbers and more than 5 chars and less than ${limit} chars`)
        return false
    }
    errSection.classList.add('view-none')
    console.log("name is true")
    return true
}
name.addEventListener('input', () => {
    nameValidate()
})

const emailValidate = () => {
    const exp = /^(\w([\.-]?\w)*)+@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const emailVal = email.value
    if(!emailVal.match(exp)) {
        setErrorMessage(`${email.id}: example@gmail.com. ${email.value} is not a valid email`)
        return false
    }
    errSection.classList.add('view-none')
    console.log('email is true')
    return true
}
email.addEventListener('focusout', () => {
    emailValidate()
})

const emptyFieldValidate = () => {
    if(!name.value || !username.value || (!phone.value && !email.value) || !pwd.value || !pwdRepeat.value || !dob.value) {
        setErrorMessage(`All fields are required`)
        return false
    }
    return true
}

//during inputs
const validators = () => {
    if(nameValidate() && usernameValidate() && (phoneValidate() || emailValidate())) {
        return true
    }
    return false
}


const closeBtn = document.getElementById('login-x-close')
closeBtn.addEventListener('click', () => {
    inputs.forEach((input) => {
        input.value = null
    })
    container.classList.add('view-none')
})

callSignupFormBtn.addEventListener('click', () => {
    container.classList.remove('view-none')
})

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


const usernameValidate = () => {
    const limit = 50
    const exp = /^@\w{5,50}$/
    const usernameVal = username.value
    if(!usernameVal.match(exp)) {
        setErrorMessage(`${username.id} @example_123. It should be more than 5 and less than ${limit} chars`)
        return false
    }
    errSection.classList.add('view-none')
    console.log("username is true")
    return true
}
username.addEventListener('input', () => {
    usernameValidate()
})


const phoneValidate = () => {
    const exp1 = /^[+]9613\d{6}$/
    const exp2 = /^[+]961(71|76|70|78)\d{6}$/
    const phoneVal = phone.value
    if(!phoneVal.match(exp1) && !phoneVal.match(exp2)) {
        setErrorMessage(`${phone.value} is not a Lebanese number`)
        return false
    }
    errSection.classList.add('view-none')
    console.log('phone is true')
    return true
}
phone.addEventListener('focusout', () => {
    phoneValidate()
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

const passwordMatchValidate = () => {
    if(pwd.value !== pwdRepeat.value) {
        setErrorMessage(`Passwords do not match`)
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

signupBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(emptyFieldValidate() && validators() && passwordMatchValidate()) {
        // ok
        // alert(email.value)
        console.log("everything is good")
        const url = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/signup-api.php"
        let data
       if(is_email_null()) {
        data = {
            "name": name.value,
            "username": username.value,
            "email": null,
            "phone": phone.value,
            "dob": dob.value,
            "password": password.value,
            "profilePhoto": "default.png"
        }
       }

        if(is_phone_null()) {
        data = {
            "name": name.value,
            "username": username.value,
            "email": email.value,
            "phone": null,
            "dob": dob.value,
            "password": password.value,
            "profilePhoto": "default.png"
        }
       }
       const usrnameExistUrl = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/username-exist-api.php"
        const usrnameExist =  dbValuesUniqueness(usrnameExistUrl, {"username": username.value})
        .then((d) => {
            console.log("ddddd==", d)
            if(d.usernameExist) {
                setErrorMessage(`username is taken`)
                return
            }
            const emailExistUrl = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/email-exist-api.php"
            const emailExist = dbValuesUniqueness(emailExistUrl, {"email": email.value})
            .then(d => {
                if(d.emailExist) {
                    setErrorMessage(`email is taken`)
                    return
                }
                
                const phoneExistUrl = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/phone-exist-api.php"
                const phoneExist = dbValuesUniqueness(phoneExistUrl, {"phone": phone.value})
                .then(d => {
                    if(d.phoneExist) {
                        setErrorMessage(`phone is taken`)
                        return
                    }
                    
                const getID = signup(url, data)
                .then(d => {
                    localStorage.setItem('userID', d.userID)
                    localStorage.setItem('username', username.value)
                    location.replace("http://localhost/9-sefactory/twitter-clone-fullstack/frontend/feed-page.html")
                    
                })
                })
            })
        })
    }else {
        console.log("everything is not good!")
    }
})

const signup = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return response.json()
}

const dbValuesUniqueness = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return response.json()
}


const toPhoneLink = document.getElementById('to-phone')
const toEmailLink = document.getElementById('to-email')
const emailOrPhoneContainer = document.querySelectorAll('.email-phone-containers')

toPhoneLink.addEventListener('click', () => {
    emailOrPhoneContainer.forEach((cont) => {
        cont.classList.toggle('view-none')
    })
    email.value = null
    if(errTxt.textContent.includes('email'))
        errSection.classList.add('view-none')
})

toEmailLink.addEventListener('click', () => {
    emailOrPhoneContainer.forEach((cont) => {
        cont.classList.toggle('view-none')
    })
    phone.value = null
    console.log(errTxt.textContent.includes('is not a Lebanese number'))
    if(errTxt.textContent.includes('is not a Lebanese number'))
        errSection.classList.add('view-none')
})

const closeBtn = document.getElementById('x-close')
closeBtn.addEventListener('click', () => {
    inputs.forEach((input) => {
        input.value = null
    })
    container.classList.add('view-none')
})

callSignupFormBtn.addEventListener('click', () => {
    container.classList.remove('view-none')
})

const is_email_null = () => {
    if(!email.value) {
        // alert("empty email")
        return true
    }
    // alert("email is good")
    return false
}

const is_phone_null = () => {
    if(!phone.value) {
        // alert("empty phone")
        return true
    }
    // alert("not empty phone")
    return false
    
}

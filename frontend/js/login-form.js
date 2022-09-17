const loginContainer = document.getElementById('login-container')
const input = document.getElementById('login-input')
const loginPwd = document.getElementById('login-password')
const loginBtn = document.getElementById('login-btn')
const loginErrSection = document.querySelector('.login-error-section')
const loginErrTxt = document.getElementById('login-error-txt')
const loginInputs = document.querySelectorAll('.login-input-box')
const callLoginFormBtn = document.getElementById('login-page-btn')


loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(!loginEmptyFieldValidate()) {
        setLoginErrorMessage(`All fields are required`)
        return
    }
    url = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/login-api.php"
    data = {
        "input": input.value,
        "password": loginPwd.value
    }

    const canLogin = dbLogin(url, data)
        .then((d) => {
            console.log(d)
            if(!d.verified) {
                setLoginErrorMessage(`wrong input or password`)
                return
            }
            loginErrSection.classList.add('view-none')
            localStorage.setItem('userID', d.userID)
            localStorage.setItem('username', d.username)
            location.replace("http://localhost/9-sefactory/twitter-clone-fullstack/frontend/feed-page.html")
        })

})

const dbLogin = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return response.json()
}

const loginCloseBtn = document.getElementById('login-x-close')
loginCloseBtn.addEventListener('click', () => {
    loginInputs.forEach((inp) => {
        inp.value = null
    })
    loginContainer.classList.add('view-none')
})

callLoginFormBtn.addEventListener('click', () => {
    loginContainer.classList.remove('view-none')
})

const setLoginErrorMessage = (msg) => {
    loginErrSection.classList.remove('view-none')
    loginErrTxt.textContent = msg
}

const loginEmptyFieldValidate = () => {
    if(!input.value || !loginPwd.value) {
        
        return false
    }
    return true
}
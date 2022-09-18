const photos = document.querySelectorAll('.profile-photos')
const getProfileUrl = "http://localhost/9-sefactory/twitter-clone-fullstack-ramzi/Frontend/get-profile-api.php"
const feedName = document.querySelectorAll('.feed-profile-name')
const feedUsername = document.querySelectorAll('.feed-profile-username')
let feedLogoutUsername = document.querySelectorAll('.feed-profile-logout-username')
const getProfile = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return response.json()
}
const dbGetProfile = getProfile(getProfileUrl, {"userID": localStorage.getItem('userID')})
    .then((d) => {
        //console.log(d)
        photos.forEach((photo) => {
            //console.log(photo)
            photo.src = d.url
        })
    })

feedName.forEach(name => name.textContent = localStorage.getItem('name'))
feedUsername.forEach(username => username.textContent = localStorage.getItem('username'))
feedLogoutUsername.forEach(usernameLogOut => usernameLogOut.textContent += localStorage.getItem('username'))



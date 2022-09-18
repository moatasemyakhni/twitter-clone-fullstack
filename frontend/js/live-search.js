const searchBar = document.getElementById('search')
const searchContainer = document.getElementById('search-container')
const dbSearchUrl = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/search-api.php"
const dbFollowUrl = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/follow-api.php"
const dbUnFollowUrl = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/unfollow-api.php"
const dbBlockUrl = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/block-api.php"
const dbUnblockUrl = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/unblock-api.php"
const dbIsBlockedUrl = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/is-blocked-api.php"
const dbIsFollowerUrl = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/is-follower-api.php"


const liveSearchAPIs = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return response.json()
}

searchBar.addEventListener('input', () => {
    let oldSearches = searchContainer.lastElementChild
    while(oldSearches) {
        searchContainer.removeChild(oldSearches)
        oldSearches = searchContainer.lastElementChild
    }
    const search = liveSearchAPIs(dbSearchUrl, {"nameUsername": searchBar.value})
        .then((d) => {
            //console.log(d)
            d.forEach((box) => {
                //console.log("box", box)
                const sectionDiv = document.createElement('div')
                sectionDiv.setAttribute('class', 'suggestion flex')
                
                const profileDiv = document.createElement('div')
                profileDiv.setAttribute('class', 'user-profile suggest flex')

                const profileWrapper = document.createElement('div')
                profileWrapper.setAttribute('class', 'ppicture')
                profileWrapper.setAttribute('id', 'ppicture')

                const profileImg = document.createElement('img')
                profileImg.setAttribute('src', box.profile_photo)
                profileImg.setAttribute('width', '50px')

                profileWrapper.appendChild(profileImg)

                const namesDiv = document.createElement('div')
                namesDiv.setAttribute('class', 'username-section flex column')
                const pName = document.createElement('p')
                pName.setAttribute('class', 'full-name')
                pName.textContent = box.name

                const pUserName = document.createElement('p')
                pUserName.setAttribute('class', 'user-name')
                pUserName.textContent = box.username

                namesDiv.appendChild(pName)
                namesDiv.appendChild(pUserName)

                // pt1
                profileDiv.appendChild(profileWrapper)
                profileDiv.appendChild(namesDiv)

                const followBtn = document.createElement('button')
                followBtn.setAttribute('class', 'follow-btn f-btn')
                followBtn.setAttribute('name', 'button')
                followBtn.setAttribute('id', `f-${localStorage.getItem('userID')}-${box.user_id}`)
                const isFollowing = liveSearchAPIs(dbIsFollowerUrl, {"userID": localStorage.getItem('userID'), "friendID": box.user_id})
                .then((d) => {
                    if(d.following) {

                        followBtn.textContent = "Unfollow"
                    }else {
                        followBtn.textContent = "follow"
                    }
                })

                const blockBtn = document.createElement('button')
                blockBtn.setAttribute('class', 'follow-btn b-btn')
                blockBtn.setAttribute('name', 'button')
                blockBtn.setAttribute('id', `b-${localStorage.getItem('userID')}-${box.user_id}`)
                const isBlocking = liveSearchAPIs(dbIsBlockedUrl, {"userID": localStorage.getItem('userID'), "friendID": box.user_id})
                .then((d) => {
                    if(d.blocked) {

                        blockBtn.textContent = "UnBlock"
                    }else {
                        blockBtn.textContent = "Block"
                    }
                })
                
                sectionDiv.appendChild(profileDiv)
                sectionDiv.appendChild(followBtn)
                sectionDiv.appendChild(blockBtn)

                searchContainer.appendChild(sectionDiv)
            })
            const followBtn = document.querySelectorAll('.f-btn')
            followBtn.forEach((btn) => {
                btn.addEventListener('click', () => {
                    //console.log(btn)
                    const friendID = btn.id.split('-')[2]
                    if(document.getElementById(`b-${localStorage.getItem('userID')}-${friendID}`).textContent == "UnBlock") {
                        return //we cant follow if blocked
                    }
                    if(btn.textContent == "Follow") {
                        btn.textContent = "Unfollow"
                        
                        const follow = liveSearchAPIs(dbFollowUrl, {"userID":localStorage.getItem('userID'), "friendID": friendID}).then((d) => {
                            //console.log(d)
                        })

                    }else {
                        btn.textContent = "Follow"
                        // const friendID = btn.id.split('-')[2]
                        const unfollow = liveSearchAPIs(dbUnFollowUrl, {"userID":localStorage.getItem('userID'), "friendID": friendID}).then((d) => {
                            //console.log(d)
                            // console.log(followBtn.id)
                        })
                    }
                })
            })
            const blockBtn = document.querySelectorAll('.b-btn')
            blockBtn.forEach((btn) => {
                btn.addEventListener('click', () => {
                    //console.log(btn)
                    if(btn.textContent == "Block") {
                        btn.textContent = "UnBlock"
                        const friendID = btn.id.split('-')[2]
                        const block = liveSearchAPIs(dbBlockUrl, {"userID":localStorage.getItem('userID'), "blockedID": friendID}).then((d) => {
                            //console.log(d)
                        })
                        
                        if(document.getElementById(`f-${localStorage.getItem('userID')}-${friendID}`).textContent == "Unfollow") {
                            document.getElementById(`f-${localStorage.getItem('userID')}-${friendID}`).textContent = "Follow"
                        }

                    }else {
                        btn.textContent = "Block"
                        const friendID = btn.id.split('-')[2]
                        const unblock = liveSearchAPIs(dbUnblockUrl, {"userID":localStorage.getItem('userID'), "friendID": friendID}).then((d) => {
                            //console.log(d)
                        })
                    }
                })
            })
        })
})
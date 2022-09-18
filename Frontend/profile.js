const userprofile = document.querySelector('.user-profile');
const logoutContainer = document.querySelector('.logout');
const tweetbtn = document.getElementById('tweet-btn');
const tweetcontainer = document.querySelector('.tweetpopup');
const popupcancelbtn = document.getElementById('popupcancel');
const popupinputimg = document.getElementById('popupcapture');
const homeinputimg = document.getElementById('capture');
const closepopup = document.getElementById('exitpopup');
const lefttweetbtn = document.getElementById('leftnav-tweet');
const hometweetcontent = document.getElementById('home-add-tweet');
const popuptweetcontent = document.getElementById('popup-add-tweet');
const popupposttweet = document.getElementById('popup-posttweet');
const mobiletweet = document.getElementById('mobile-tweet');
const tweetfeed = document.querySelector('.tweet-now');
const searchinput = document.getElementById('search');
const searchcontainer = document.querySelector('.search-suggest');
const leftnavsearchicon = document.getElementById('search-icon');
const mobilesearchicon = document.getElementById('mobile-searchicon');
const mobilesearchpage = document.querySelector('.mobile-search');
const home_nav = document.getElementById('home').style.fontWeight = "lighter";
const profile_nav = document.querySelector('.path').classList.remove("path");
const editprofilepage = document.getElementById('editpage');
const editprofile = document.getElementById('edit-profile');
const close_editprofile = document.getElementById('exit-edit');
const change_pp = document.getElementById('change-pp');
const changepp_page = document.getElementById('mediapage');
const close_changepage = document.getElementById('exit-change');
const mobiletweetbtn = document.getElementById('home-post-tweet');
const homecancel =document.getElementById('cancel');

// Function to display users' chosen image
const displayChosenImg = (btn, image) => {
  btn.classList.remove('alwayshidden');
  image.classList.remove('alwayshidden');
  image.src = URL.createObjectURL(event.target.files[0]);
};

//Function to display Tweet popup
const displayTweetContainer = () => {
tweetcontainer.classList.remove("alwayshidden");
};

const closeTweetPopup = () => {
  tweetcontainer.classList.add("alwayshidden");
};

// Function to remove users' chosen image
const removeChosenImg = (btn, image) => {
  image.classList.add('alwayshidden');
  image.src = '';
  btn.classList.add('alwayshidden');
};

// Function to display logout Container
const logoutContainerShow = () => {
  logoutContainer.classList.toggle("alwayshidden");
};

// Function to submit tweet contents
const submitTweet = () => {
location.reload();
};

// function to display tweet container on mobiles
const mobileTweet = () => {
  const feed = document.querySelector('#profile-feed');
  feed.classList.add("alwayshidden");
  tweetfeed.style.display = "flex";
  tweetfeed.style.width = "300px";
  mobiletweet.style.display = "none";

};

// function to display search suggestions container
const displaySearch = () => {
searchcontainer.classList.toggle('alwayshidden');
};

// function to display search page on small screens
const displaySearchPage = () => {
mobilesearchpage.classList.remove('alwayshidden');
};

// function to display Edit Profile Page
const showEditPage = () => {
  editprofilepage.classList.remove('alwayshidden');
};

// function to close Edit Profile Page
const closeEditPage = () => {
  editprofilepage.classList.add('alwayshidden');

};

// function to display Change Profile Picture Page
const displayChangeProfile = (changedimage) => {
  changepp_page.classList.remove('alwayshidden');
  changedimage.src =URL.createObjectURL(event.target.files[0]);
};

// function to Close Change Profile Picture Page
const closeChangeProfile = () => {
  changepp_page.classList.add('alwayshidden');
};



// Event Listeners
popupinputimg.addEventListener("change", () => {
  const popupchosenimage = document.getElementById('popupchosenimage');
  displayChosenImg(popupcancelbtn, popupchosenimage);

});

popupcancelbtn.addEventListener("click", () => {
  const popupchosenimage = document.querySelector('#popupchosenimage');
  removeChosenImg(popupcancelbtn, popupchosenimage);
});

homeinputimg.addEventListener("change", () => {
  const chosenimage = document.getElementById('chosenimage');
  displayChosenImg(homecancel, chosenimage);

});
homecancel.addEventListener("click", () => {
  const chosenimage = document.querySelector('#chosenimage');
  removeChosenImg(homecancel, chosenimage);
});

userprofile.addEventListener("click", () => {
logoutContainerShow();
});

tweetbtn.addEventListener('click', () => {
displayTweetContainer();
});

lefttweetbtn.addEventListener("click", () => {
  displayTweetContainer();

});

closepopup.addEventListener("click", () => {
closeTweetPopup();
});


popupposttweet.addEventListener("click", () => {

  submitTweet(popupchosenimage, popuptweetcontent);
});

mobiletweet.addEventListener("click", () => {
  mobileTweet();
});


searchinput.addEventListener("click", () => {
  displaySearch();
});

leftnavsearchicon.addEventListener("click", () => {
  displaySearchPage();
});

mobilesearchicon.addEventListener("click", () => {
  displaySearchPage();
});

editprofile.addEventListener("click", () => {
  showEditPage();
});

close_editprofile.addEventListener("click", () => {
  closeEditPage();
});

change_pp.addEventListener("change", () => {
  const changedimage = document.getElementById('changed-pp');
  displayChangeProfile(changedimage);
});

close_changepage.addEventListener("click", () => {
  closeChangeProfile();
});

popupposttweet.addEventListener('click', () => {
  submitTweet();
});
mobiletweetbtn.addEventListener('click', () => {
  submitTweet();
});

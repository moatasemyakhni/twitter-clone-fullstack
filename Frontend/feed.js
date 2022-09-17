const inputimg = document.getElementById('capture');
const userprofile = document.querySelector('.user-profile');
const logoutContainer = document.querySelector('.logout');
const tweetbtn = document.getElementById('tweet-btn');
const tweetcontainer = document.querySelector('.tweetpopup');
const cancelbtn = document.getElementById('cancel');
const popupcancelbtn = document.getElementById('popupcancel');
const popupinputimg = document.getElementById('popupcapture');
const closepopup = document.getElementById('exitpopup');
const lefttweetbtn = document.getElementById('leftnav-tweet');
const hometweetcontent = document.getElementById('home-add-tweet');
const homeposttweet = document.getElementById('home-post-tweet');
const popuptweetcontent = document.getElementById('popup-add-tweet');
const popupposttweet = document.getElementById('popup-posttweet');
const mobiletweet = document.getElementById('mobile-tweet');
const tweetfeed = document.querySelector('.tweet-now');
const searchinput = document.getElementById('search');
const searchcontainer = document.querySelector('.search-suggest');
const leftnavsearchicon = document.getElementById('search-icon');
const mobilesearchicon = document.getElementById('mobile-searchicon');
const mobilesearchpage = document.querySelector('.mobile-search');

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
const submitTweet = (image, tweetcontent) => {
  console.log(tweetcontent.value);
  console.log(image);
};

// function to display tweet container on mobiles
const mobileTweet = () => {
  const feed = document.querySelector('.tweets');
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





// Event Listeners
inputimg.addEventListener("change", () => {
console.log("hello");
const chosenimage = document.querySelector('.tweet-now #chosenimage');
displayChosenImg(cancelbtn, chosenimage);

});

cancelbtn.addEventListener("click", () => {
const chosenimage = document.querySelector('.tweet-now #chosenimage');
removeChosenImg(cancelbtn, chosenimage);
});

popupinputimg.addEventListener("change", () => {
  const popupchosenimage = document.getElementById('popupchosenimage');
  displayChosenImg(popupcancelbtn, popupchosenimage);

});

popupcancelbtn.addEventListener("click", () => {
  const popupchosenimage = document.querySelector('#popupchosenimage');
  removeChosenImg(popupcancelbtn, popupchosenimage);
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

homeposttweet.addEventListener("click", () => {

  submitTweet(chosenimage, hometweetcontent);
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

const inputimg = document.getElementById('capture');
const userprofile = document.querySelector('.user-profile');
const logoutContainer = document.querySelector('.logout');
const tweetbtn = document.getElementById('tweet-btn');
const tweetcontainer = document.querySelector('.tweetpopup');
const cancelbtn = document.getElementById('cancel');
const popupcancelbtn = document.getElementById('popupcancel');
const popupinputimg = document.getElementById('popupcapture');
const closepopup = document.getElementById('exitpopup');


// Function to display users' chosen image
const displayChosenImg = (btn, image) => {
  console.log(btn);
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

closepopup.addEventListener("click", () => {
closeTweetPopup();
});

const inputimg = document.getElementById('capture');
const cancelbtn = document.getElementById('cancel');
const chosenimage = document.getElementById('chosenimage');
const userprofile = document.querySelector('.user-profile');
const logoutContainer = document.querySelector('.logout');


// Function to display users' chosen image
const displayChosenImg = () => {
  chosenimage.classList.remove('alwayshidden');
  chosenimage.src = URL.createObjectURL(event.target.files[0]);
  cancelbtn.classList.remove('alwayshidden');
};

// Function to remove users' chosen image
const removeChosenImg = () => {
  chosenimage.classList.add('alwayshidden');
  chosenimage.src = '';
  cancelbtn.classList.add('alwayshidden');
};

// Function to display logout Container
const logoutContainerShow = () => {
  logoutContainer.classList.toggle("alwayshidden");
};

// Event Listeners
inputimg.addEventListener("change", () => {
displayChosenImg();
});

cancelbtn.addEventListener("click", () => {
removeChosenImg();
});

userprofile.addEventListener("click", () => {
logoutContainerShow();
});

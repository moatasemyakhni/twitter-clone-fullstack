const inputimg = document.getElementById('capture');
const cancelbtn = document.getElementById('cancel');
const chosenimage = document.getElementById('chosenimage');


// Function to display users' chosen image
const displayChosenImg = () => {
  chosenimage.classList.remove('hidden-img');
  chosenimage.src = URL.createObjectURL(event.target.files[0]);
  cancelbtn.classList.remove('hidden-btn');
};

// Function to remove users' chosen image
const removeChosenImg = () => {
  chosenimage.classList.add('hidden-img');
  chosenimage.src = '';
  cancelbtn.classList.add('hidden-btn');
};


// Event Listeners
inputimg.addEventListener("change", () => {
displayChosenImg();
});

cancelbtn.addEventListener("click", () => {
removeChosenImg();
});

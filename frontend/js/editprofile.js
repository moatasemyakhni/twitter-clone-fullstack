const nameinput = document.getElementById('change-name');
const savebtn = document.getElementById('edit-save');
const changedpicture = document.getElementById('change-pp');

const newname = nameinput.value;

const username = localStorage.getItem('username');
// function to update User full name
const updateProfile = async (url, data) => {
  const response = await fetch(url,{
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(data)
  })
    return response.json();

};






// Event Listeners

savebtn.addEventListener('click', () => {
const newname = nameinput.value;
const url = 'http://localhost/twitter-clone-fullstack/backend/editname.php';
if (newname!=''){
const data = {
  'userID': userid,
  'name': newname
}
updateProfile(url, data);


}
location.reload();

});

const updatepic = (image) => {
const apply = document.getElementById('media-save');
apply.addEventListener('click', () => {
  const url = 'http://localhost/twitter-clone-fullstack/backend/edit-profile-api.php';
  const data = {
    'userID': userid,
    'username': username,
    'profilePhoto': image
  }

  updateProfile(url, data);
  location.reload();
});

};

changedpicture.addEventListener('change', () => {
  changedimg = changedpicture.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
      const finalimage = reader.result;
      console.log(finalimage);
      updatepic(finalimage);
  });
   reader.readAsDataURL(changedimg);

});

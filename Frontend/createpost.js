const hometweetbtn = document.getElementById('home-post-tweet');
const hometweetcontents = document.getElementById('home-add-tweet');
const hometweetimg = document.querySelector('#capture');
let image='';

const postTweetAPI = async (url, data) => {
const response = await fetch(url,{
  method: "POST",
  headers: {
    "Content-Type" : "application/json"
  },
  body: JSON.stringify(data)
})
  return response.json();
};




const postImageAPI = async (url, data) => {
const imgresponse = await fetch(url,{
  method: "POST",
  headers: {
    "Content-Type" : "application/json"
  },
  body: JSON.stringify(data)
})
  return imgresponse.json();
};


const postTweet = () => {
  const url = "http://localhost/twitter-clone-fullstack/backend/create-post-api.php";
  const hometweetcontent = hometweetcontents.value;
  console.log(hometweetcontent);
  const data = {
    'userID': 2,
    'content':hometweetcontent
  }
const res =  postTweetAPI(url, data).then((result) => {
    const post_id = result.postID;
    if (image!=''){
      const reader = new FileReader();
      reader.addEventListener('load', () => {
          console.log(reader.result);
      });
      finalimage = reader.readAsDataURL(image);


      const imageURL = "http://localhost/twitter-clone-fullstack/backend/insert-photo-in-post.php";
      const imagedata = {
        'postID': post_id,
        'photo': finalimage
      };
    const photoresponse =  postImageAPI(imageURL, imagedata).then((result) => {
        console.log(result);
      });
     }
  });


};

hometweetbtn.addEventListener("click", () => {
postTweet();
});

hometweetimg.addEventListener('change', () => {
image = hometweetimg.files[0];
});

const hometweetbtn = document.getElementById('home-post-tweet');
const hometweetcontents = document.getElementById('home-add-tweet');
const hometweetimg = document.querySelector('#capture');
const popuptweetimg = document.getElementById('popupcapture');
const popuptweetcontents = document.getElementById('popup-add-tweet');
const popuptweetbtn = document.getElementById('popup-posttweet');
let post_id ='';
let image='';
const userid = localStorage.getItem('userID');
console.log(userid);

//function to call post tweets API
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


//function to call post tweets photos API
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

// function to insert image into database
const postImg = (finalimage) => {
  console.log(finalimage);
  const imageURL = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/insert-photo-in-post.php";
  const imagedata = {
    'postID': post_id,
    'photo': finalimage
  };
const photoresponse =  postImageAPI(imageURL, imagedata).then((result) => {
    console.log(result);
  });
};

// function to insert tweet into database
const postTweet = (content) => {
  const url = "http://localhost/9-sefactory/twitter-clone-fullstack/backend/create-post-api.php";
  console.log("hii");
  const data = {
    'userID': userid,
    'content':content
  }
const res =  postTweetAPI(url, data).then((result) => {
    post_id = result.postID;
    if (image!=''){
      const reader = new FileReader();
      reader.addEventListener('load', () => {
          const finalimage = reader.result;
          console.log(finalimage);
          postImg(finalimage);
      });
       reader.readAsDataURL(image);


     }
  });


};


// Event Listeners
hometweetbtn.addEventListener("click", () => {
  const hometweetcontent = hometweetcontents.value;
postTweet(hometweetcontent);
});

popuptweetbtn.addEventListener("click", () => {
  const popuptweetcontent = popuptweetcontents.value;
postTweet(popuptweetcontent);
});

popuptweetimg
popuptweetimg.addEventListener('change', () => {
image = popuptweetimg.files[0];
});

hometweetimg.addEventListener('change', () => {
image = hometweetimg.files[0];
});

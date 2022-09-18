const userID = localStorage.getItem('userID');

const url ='http://localhost/9-sefactory/twitter-clone-fullstack/backend/gettweets.php';

const data = {
  'userID': userID
}

// function that gets fetch results and display it in feed page
const displayData = (data) => {
results = postuseridAPI(url, data).then((result) => {
  result.forEach((item, i) => {
    console.log(item);
    const tweetfeed = document.querySelector('.feed-heading')
  const tweets = document.createElement('div');
  tweets.classList.add('tweets');
  tweets.classList.add('flex');
  tweets.classList.add('column');
  tweetfeed.appendChild(tweets);

  const tweet = document.createElement('div');
  tweet.classList.add('following-tweet');
  tweet.classList.add('flex');
  tweets.appendChild(tweet);

  const userimg = document.createElement('div');
  userimg.classList.add('user-img');
  userimg.src = item.profile_photo;
  tweet.appendChild(userimg);

  const img = document.createElement('img');
  img.style.width = '50px';
  userimg.appendChild(img);

  const tweetinfo = document.createElement('div');
  tweetinfo.classList.add('tweet-info');
  tweetinfo.classList.add('flex');
  tweetinfo.classList.add('column');
  tweet.appendChild(tweetinfo);

  const name = document.createElement('h4');
  name.textContent = item.name;
  tweetinfo.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('user-username');
  username.textContent = item.username;
  tweetinfo.appendChild(username);

  const tweetcontent = document.createElement('p');
  tweetcontent.classList.add('user-tweet');
  tweetcontent.textContent = item.content;
  tweetinfo.appendChild(tweetcontent);

  const tweetimg = document.createElement('div');
  tweetimg.classList.add('tweet-img');
  tweetimg.classList.add('flex');
  tweetinfo.appendChild(tweetimg);

  const tweet_img = document.createElement('img');
  tweet_img.style.width = '100%';
  tweetimg.appendChild(tweet_img);

  const reactions = document.createElement('div');
  reactions.classList.add('reactions');
  reactions.classList.add('flex');
  tweetinfo.appendChild(reactions);

  const icon = document.createElement('i');
  icon.classList.add('fa');
  icon.classList.add('fa-thin');
  icon.classList.add('fa-heart');

  reactions.appendChild(icon);

  const likes = document.createElement('p');
  likes.textContent = "100k";
  reactions.appendChild(likes);

});



});

};

//function to fetch gettweets api
const postuseridAPI = async (url, data) => {
const response = await fetch(url,{
  method: "POST",
  headers: {
    "Content-Type" : "application/json"
  },
  body: JSON.stringify(data)
})
  return response.json();
};

displayData(data);


// const getData = () => {fetch('http://localhost/9-sefactory/twitter-clone-fullstack/backend/gettweets.php')
//   .then((response) => response.json())
//   .then((data) => displayData(data)
// );};

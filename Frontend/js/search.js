// const searchinput = document.getElementById('search');
// const searchcontainer = document.querySelector('.search-suggest');
// const leftnavsearchicon = document.getElementById('search-icon');
// const mobilesearchicon = document.getElementById('mobile-searchicon');
// const mobilesearchpage = document.querySelector('.mobile-search');
// var timeout;
//
// // function to fetch Search API
// const getSearchUser = async (url, data) => {
// const response = await fetch(url,{
//   method: "POST",
//   headers: {
//     "Content-Type" : "application/json"
//   },
//   body: JSON.stringify(data)
// })
//   return response.json();
// };
//
// // function to get Search API response
// const searchUser = (user) => {
// displaySearch();
// const url = "http://localhost/twitter-clone-fullstack/backend/search-api.php";
// const data = {
//   'nameUsername': user
// };
// const response = getSearchUser(url, data).then((result) => {
// result.forEach((item, i) => {
// const suggestion = document.createElement('div');
// suggestion.classList.add("suggestion");
// suggestion.classList.add("flex");
// searchcontainer.appendChild(suggestion);
// const userprofile = document.createElement('div');
// userprofile.classList.add("user-profile");
// userprofile.classList.add("suggest");
// userprofile.classList.add("flex");
// suggestion.appendChild(userprofile);
//
// const ppicture = document.createElement('div');
// ppicture.classList.add('ppicture');
// const img = document.createElement('img');
// ppicture.appendChild(img);
// userprofile.appendChild(ppicture);
//
// const username_section = document.createElement('div');
// username_section.classList.add('username-section');
// username_section.classList.add('flex');
// username_section.classList.add('column');
// userprofile.appendChild(username_section);
//
// const fullname = document.createElement('p');
// const username = document.createElement('p');
// fullname.classList.add('full-name');
// username.classList.add('user-name');
// fullname.textContent = result.name;
// username_section.appendChild(fullname);
// username_section.appendChild(username);
//
// const follow_btn = document.createElement('button');
// const block_btn = document.createElement('button');
//
// follow_btn.classList.add('follow-btn');
// block_btn.classList.add('follow-btn');
//
// suggestion.appendChild(follow_btn);
// suggestion.appendChild(block_btn);
// });
//
// });
// };
//
// // function to display search suggestions container
// const displaySearch = () => {
// searchcontainer.classList.toggle('alwayshidden');
// };
//
// // function to display search page on small screens
// const displaySearchPage = () => {
// mobilesearchpage.classList.remove('alwayshidden');
// };
//
// searchinput.addEventListener("keyup", () => {
//    //clearTimeout(timeout);
//   const searched_user = searchinput.value;
//   const timeout = setTimeout(() => {searchUser(searched_user);
// }, 5000);
//
// });
//
// searchinput.addEventListener("keydown", () => {
//   clearTimeout(timeout);
//
//
// });
//
// leftnavsearchicon.addEventListener("click", () => {
//   displaySearchPage();
// });
//
// mobilesearchicon.addEventListener("click", () => {
//   displaySearchPage();
// });

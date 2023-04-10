import { Logout } from "./logout";
export default async function Users(app, isLoggedIn) {
  let list = [];
  let name = "";

  app.innerHTML = `
  
  <div class="users-container">

    <h1 id="prct3">Users</h1>
    <input type="search" placeholder="search" id="search"/>
    <div class="users">
        <div class="users-list">
        <section class='users-list-header'>
        <div class="detail">id</div>
        <div class="detail1">Profile pic</div>
        <div class="detail">fullName</div>
        <div class="detail">dob</div>
        <div class="detail">gender</div>
        <div class="detail">currentCity</div>
        <div class="detail">currentCountry</div>
        </section>
        <main class="users-list-main"></main>
        </div>
    </div>
  </div>
  `;
  const search = document.querySelector("#search");
  const userCont = document.querySelector(".users-container");
  const users = document.querySelector(".users-list");
  const users_list_main = document.querySelector(".users-list-main");
  const req = await fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users');
  const json = await req.json();
  for (let index = 0; index < json.length; index++) {
    list.push(json[index]);
  }

  list.map((r) => {
    const users_list_main_container = document.createElement("div");
    const id = document.createElement("div");
    const profilePic = document.createElement("img");
    const fullName = document.createElement("div");
    const dob = document.createElement("div");
    const gender = document.createElement("div");
    const currentCity = document.createElement("div");
    const currentCountry = document.createElement("div");
    users_list_main_container.className = "users_list_main_container";
    users_list_main_container.classList.add(r.id);

    id.innerHTML = r.id;
    profilePic.src = r.profilePic;
    fullName.innerHTML = r.fullName;
    dob.innerHTML = r.dob;
    gender.innerHTML = r.gender;
    currentCity.innerHTML = r.currentCity;
    currentCountry.innerHTML = r.currentCountry;

    users_list_main_container.appendChild(id);
    users_list_main_container.appendChild(profilePic);
    users_list_main_container.appendChild(fullName);
    users_list_main_container.appendChild(dob);
    users_list_main_container.appendChild(gender);
    users_list_main_container.appendChild(currentCity);
    users_list_main_container.appendChild(currentCountry);
    users_list_main.appendChild(users_list_main_container);
  });

  search.addEventListener("input", function (e) {
    const container = document.querySelector(".users_list_main_container");
  });
  Logout(isLoggedIn, app, userCont);
}

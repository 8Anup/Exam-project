import "./style.css";
import Orders from "./Orders";
import Products from "./products";
import Users from "./users";
const siteName = window.location.origin;
const isLoggedIn = {
  _loggedIn: false,
  set setLogIn(state) {
    this._loggedIn = state;
  },
  get logged() {
    return this._loggedIn;
  },
};

export function signin() {
  return `
  <h1 id="sign-in">SignUp</h1>
  <form id="form">
    <input type="userName" placeholder="Username" required id="email" pattern="[A-Za-z0-9]{6,20}"/> 
    <input type="password" placeholder="Password" required id="password" pattern="[A-Za-z0-9]{6,20}"/> 
    <input value="Login" type="submit" id="login"/> 
  </form>
`;
}
const app = document.querySelector("#app");
const orders = document.querySelector("#orders");
const products = document.querySelector("#products");
const users = document.querySelector("#users");

app.innerHTML = signin();
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  isLoggedIn.setLogIn = true;
  Products(app, isLoggedIn);
});

products.addEventListener("click", (e) => {
  if (isLoggedIn.logged === true) {
    Products(app, isLoggedIn);
  }
});

orders.addEventListener("click", (e) => {
  if (isLoggedIn.logged === true) {
    Orders(app, isLoggedIn);
  }
});

users.addEventListener("click", (e) => {
  if (isLoggedIn.logged === true) {
    Users(app, isLoggedIn);
  }
});

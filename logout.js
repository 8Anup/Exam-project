import { signin } from "./main";

export function Logout(isLoggedIn, app, element) {
  const logout = document.createElement("div");
  logout.className = "logout";
  logout.textContent = "logout";
  logout.addEventListener("click", function () {
    isLoggedIn.setLogin = false;
    app.innerHTML = signin();
  });
  element.appendChild(logout);
}

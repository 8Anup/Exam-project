import { Logout } from "./logout";

export default function Orders(app, isLoggedIn) {
  const list = [];

  app.innerHTML = `
  <div class="order-container">
    <h1 id="prct">Orders</h1>
    <div class="orders">
        
        <div >
        <h4 class="order-filter"></h4>
        <h4 id="count">Count:</h4>
        <input type="checkbox" class="dtl">New</input><br>
        <input  type="checkbox" class="dtl">Packed</input><br>
        <input type="checkbox" class="dtl">InTransit</input><br>
        <input  type="checkbox" class="dtl">Delivered</input><br>
        </div>
        <div class="order-list">
        <section class='order-list-header'>
        <div class="detail">id</div>
        <div class="detail">Customer Name</div>
        <div class="detail">Order Date</div>
        <div class="detail">amount</div>
        <div class="detail">Order status</div>
        </section>
        <main class="order-list-main"></main>
        </div>
    </div>
  </div>
  `;
  const orderCont = document.querySelector(".order-container");
  const orders = document.querySelector(".order-list");
  const order_list_main = document.querySelector(".order-list-main");
  const orders_filter = document.querySelector(".order-filter");
  orders_filter.innerHTML = "filter";
  fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders')
    .then((e) => e.json())
    .then((e) =>
      e.map((r) => {
        const order_list_main_container = document.createElement("div");
        const id = document.createElement("div");
        const customer_name = document.createElement("div");
        const order_date = document.createElement("div");
        const amount = document.createElement("div");
        const order_status = document.createElement("div");
        order_list_main_container.className = "order_list_main_container";

        id.innerHTML = r.id;
        customer_name.innerHTML = r.customerName;
        order_date.innerHTML = r.orderDate;
        amount.innerHTML = r.amount;
        order_status.innerHTML = r.orderStatus;

        order_list_main_container.appendChild(id);
        order_list_main_container.appendChild(customer_name);
        order_list_main_container.appendChild(order_date);
        order_list_main_container.appendChild(amount);
        order_list_main_container.appendChild(order_status);
        order_list_main.appendChild(order_list_main_container);
      })
    );
  Logout(isLoggedIn, app, orderCont);
}

import { Logout } from "./logout";

export default function Products(app, isLoggedIn) {
  const list = [];

  app.innerHTML = `
  <div class="product-container">
    <h1 id="prct">Products</h1>
    <div class="products">
        <div >
        <h4 class="filter">Fiter</h4>
        <h4 id="count">Count:</h4>
        <input type="checkbox" class="dtl">Expired</input>
        <br>
        <input type="checkbox" class="dt2">Low Stack</input>
        </div>
        <div class="product-list">
        <section class='product-list-header'>
        <div class="detail">id</div>
        <div class="detail">Product Name</div>
        <div class="detail">Product Brand</div>
        <div class="detail">Expiry Date</div>
        <div class="detail">Unit Price</div>
        <div class="detail">Stock</div>
        </section>
        <main class="product-list-main"></main>
    </div>
    </div>
  </div>`;
  const productCont = document.querySelector(".product-container");
  const products = document.querySelector(".product-list");
  const product_list_main = document.querySelector(".product-list-main");
  fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products')
    .then((e) => e.json())
    .then((e) =>
      e.map((r) => {
        const product_list_main_container = document.createElement("div");
        const id = document.createElement("div");
        const product_name = document.createElement("div");
        const product_brand = document.createElement("div");
        const expiry_date = document.createElement("div");
        const unit_price = document.createElement("div");
        const stock = document.createElement("div");
        product_list_main_container.className = "product_list_main_container";
        id.innerHTML = r.id;
        product_name.innerHTML = r.medicineName;
        product_brand.innerHTML = r.medicineBrand;
        expiry_date.innerHTML = r.expiryDate;
        unit_price.innerHTML = r.unitPrice;
        stock.innerHTML = r.stock;

        product_list_main_container.appendChild(id);
        product_list_main_container.appendChild(product_name);
        product_list_main_container.appendChild(product_brand);
        product_list_main_container.appendChild(expiry_date);
        product_list_main_container.appendChild(unit_price);
        product_list_main_container.appendChild(stock);
        product_list_main.appendChild(product_list_main_container);
      })
    );
  Logout(isLoggedIn, app, productCont);
}

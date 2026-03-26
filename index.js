const product = document.getElementById("product");

async function lodedItem() {
  try {
    const rep = await fetch("product.json");
    const data = await rep.json();
    console.log(data);

    data.products.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add = "card";
      card.innerHTML = `
       <div class="container" id="product">
      <div class="card">
        <img src="${item.image}" alt="" />
        <h2>${item.name}</h2>
        <h3>price:${item.price}</h3>
        <h3>brenad:${item.brand}</h3>
          <h3>category:${item.category}</h3>
            <h3>stock:${item.stock}</h3>
        <a href="product.html?id=${item.id}"> viwe ditels</a>
      </div>
    </div>
      
      
      `;
      product.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}
lodedItem();

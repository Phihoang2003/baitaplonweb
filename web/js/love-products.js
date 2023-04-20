var loveItems = JSON.parse(localStorage.getItem("loveItems")) || [];
var tableBody = document.querySelector(".cart-table");
loveItems.forEach(function (item) {
  var row = document.createElement("tr");
  var productNameCell = document.createElement("td");
  var productPriceCell = document.createElement("td");
  var quantityCell = document.createElement("td");
  var Delete = document.createElement("td");
  var productImg = document.createElement("td");
  var img = document.createElement("img");
  img.setAttribute("src", `${item.img}`);
  img.style.width = "50%";
  img.style.height = "200px";
  productImg.appendChild(img);

  productNameCell.innerHTML = item.name;

  productPriceCell.innerHTML = item.price;
  quantityCell.innerHTML = item.quantity;
  Delete.innerHTML = `<i class="btn-delete fa-solid fa-trash" data-id=${item.id}></i>`;

  row.appendChild(productNameCell);
  row.appendChild(productImg);
  row.appendChild(productPriceCell);
  row.appendChild(quantityCell);
  row.appendChild(Delete);
  Delete.style.cursor = "pointer";
  tableBody.appendChild(row);
});

function renderCart() {
  var loveItems = JSON.parse(localStorage.getItem("loveItems")) || [];

  var tableBody = document.querySelector(".cart-table");
  tableBody.innerHTML = "";

  loveItems.forEach(function (item) {
    var row = document.createElement("tr");

    var productIdCell = document.createElement("td");
    productIdCell.innerHTML = item.id;
    row.appendChild(productIdCell);

    var nameCell = document.createElement("td");
    nameCell.innerHTML = item.name;
    row.appendChild(nameCell);

    var priceCell = document.createElement("td");
    priceCell.innerHTML = item.price;
    row.appendChild(priceCell);

    var quantityCell = document.createElement("td");
    quantityCell.innerHTML = item.quantity;
    row.appendChild(quantityCell);

    var totalCell = document.createElement("td");
    totalCell.innerHTML = Number(item.price) * Number(item.quantity);
    row.appendChild(totalCell);

    var removeButtonCell = document.createElement("td");
    removeButtonCell.innerHTML = `<i class="btn-delete fa-solid fa-trash" data-id=${item.id}></i>`;

    row.appendChild(removeButtonCell);

    tableBody.appendChild(row);
  });
}
// remove
function removeCartItem(id) {
  var loveItems = JSON.parse(localStorage.getItem("loveItems")) || [];
  var index = -1;

  // Tìm kiếm sản phẩm cần xóa trong mảng các sản phẩm trong giỏ hàng
  for (var i = 0; i < loveItems.length; i++) {
    if (loveItems[i].id === id) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    // Nếu sản phẩm được tìm thấy, xóa sản phẩm đó khỏi mảng
    if (loveItems[index].quantity > 1) {
      loveItems[index].quantity = loveItems[index].quantity - 1;
    } else {
      loveItems.splice(index, 1);
    }

    // Cập nhật lại giá trị của giỏ hàng trong localStorage
    localStorage.setItem("loveItems", JSON.stringify(loveItems));
    location.reload();

    // Cập nhật lại giao diện của giỏ hàng bằng cách render lại các sản phẩm còn lại trong giỏ hàng
    renderCart();
  }
}

document.querySelectorAll(".btn-delete").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var productId = this.dataset.id;
    removeCartItem(productId);
  });
});

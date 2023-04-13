// them san pham

var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
var tableBody = document.querySelector(".cart-table");
let totalPrice;
function getTotalPrice() {
  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return totalPrice;
}
getTotalPrice();
var totalPay = document.querySelector(".total-price");
totalPay.textContent = totalPrice;

cartItems.forEach(function (item) {
  var row = document.createElement("tr");
  var productNameCell = document.createElement("td");
  var productPriceCell = document.createElement("td");
  var quantityCell = document.createElement("td");
  var totalCell = document.createElement("td");

  var Delete = document.createElement("td");
  productNameCell.innerHTML = item.name;
  totalCell.innerHTML = Number(item.price) * Number(item.quantity);
  productPriceCell.innerHTML = item.price;
  quantityCell.innerHTML = item.quantity;
  Delete.innerHTML = `<i class="btn-delete fa-solid fa-trash" data-id=${item.id}></i>`;
  row.appendChild(productNameCell);
  row.appendChild(quantityCell);
  row.appendChild(productPriceCell);
  row.appendChild(totalCell);
  row.appendChild(Delete);
  Delete.style.cursor = "pointer";
  tableBody.appendChild(row);
});
// xoa san pham

function renderCart() {
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  var tableBody = document.querySelector(".cart-table");
  tableBody.innerHTML = "";

  cartItems.forEach(function (item) {
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
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  var index = -1;

  // Tìm kiếm sản phẩm cần xóa trong mảng các sản phẩm trong giỏ hàng
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === id) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    // Nếu sản phẩm được tìm thấy, xóa sản phẩm đó khỏi mảng
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity = cartItems[index].quantity - 1;
    } else {
      cartItems.splice(index, 1);
    }

    // Cập nhật lại giá trị của giỏ hàng trong localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
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

// cachkhac

$(document).ready(function () {
  $("#btnModal").click(function () {
    $("#myModal").modal();
  });
  $("#myModal").modal("hide");
  $("#luu").click(function () {
    var ten = $("#txtTen").val();
    var dc = $("#txtDC").val();
    var ngay = $("#txtNgay").val();
    var gio = $("#txtTime").val();
    var email = $("#txtEmail").val();
    var dt = $("#txtdt").val();

    var cartInfo = {
      ten: ten,
      dc: dc,
      ngay: ngay,
      gio: gio,
      email: email,
      dt: dt,
    };
    localStorage.setItem("cartInfo", JSON.stringify(cartInfo));

    // Hiển thị thông báo cho người dùng biết sản phẩm đã được thêm vào giỏ hàng
    alert("Thông tin đã được lưu.");
  });
  // su dung chuoi regex bieu thuc chinh quy de kiem tra
  function kiemTraTen() {
    var kt = /^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)*$/;
    ten = $("#txtTen").val();
    if (ten == "") {
      $("#loiTen").html("Bắt buộc nhập");
      return false;
    }
    if (!kt.test(ten)) {
      $("#loiTen").html(" *Chữ cái đầu của mỗi từ phải viết hoa !!");
      return false;
    }
    $("#loiTen").html("*");
    return true;
  }
  $("#txtTen").blur(kiemTraTen);
  function kiemTraDT() {
    var kt = /^[0-9]{4}\-[0-9]{3}\-[0-9]{3}$/;
    dt = $("#txtDT").val();
    if (dt == "") {
      $("#loiDT").html("Bắc buộc nhập");
      return false;
    }
    if (!kt.test(dt)) {
      $("#loiDT").html("Nhập đúng mẫu: 0000-000-000");
      return false;
    }
    $("#loiDT").html("*");
    return true;
  }
  $("#txtDT").blur(kiemTraDT);
  function kiemTraDC() {
    var kt = /^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)*$/;
    ten = $("#txtTen").val();
    if (ten == "") {
      $("#loiDC").html("Bắt buộc nhập");
      return false;
    }
    if (!kt.test(ten)) {
      $("#loiDC").html(" *Chữ cái đầu của mỗi từ phải viết hoa !!");
      return false;
    }
    $("#loiDC").html("*");
    return true;
  }
  $("#txtDC").blur(kiemTraDC);
  function kiemTraNgay() {
    var ngay = $("#txtNgay").val();
    if (ngay == "") {
      $("#loiNgay").html("Bắc buộc nhập");
      return false;
    }
    day = new Date(ngay);
    today = new Date();
    if (day < today) {
      $("#loiNgay").html("Ngày phải sau ngày hiện tại");
      return false;
    }
    $("#loiNgay").html("*");
    return true;
  }
  $("#txtNgay").blur(kiemTraNgay);
});

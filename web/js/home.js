var addToCartButton = document.querySelectorAll(".add-to-cart-btn");
addToCartButton.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var productId = e.target
      .closest(".item-watch-forher")
      .getAttribute("data-product-id");
    var productName =
      button.parentElement.querySelector(".product-name").innerText;
    var productPrice =
      button.parentElement.querySelector(".product-price").innerText;

    var product = {
      id: productId,
      name: productName,
      price: productPrice,
    };

    // Lấy danh sách sản phẩm trong giỏ hàng từ Local Storage
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    var itemIndex = cartItems.findIndex(function (item) {
      return item.id === productId;
    });

    if (itemIndex !== -1) {
      // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng sản phẩm
      cartItems[itemIndex].quantity += 1;
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm vào giỏ hàng
      product.quantity = 1;
      cartItems.push(product);
    }

    // Lưu danh sách sản phẩm vào Local Storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Hiển thị thông báo cho người dùng biết sản phẩm đã được thêm vào giỏ hàng
    alert("Sản phẩm đã được thêm vào giỏ hàng.");
  });
});

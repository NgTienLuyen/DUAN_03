document.addEventListener("DOMContentLoaded", function (event) {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.querySelector("input[name='Username']").value;
    const password = document.querySelector("input[name='Password']").value;

    if (username === "admin" && password === "admin") {
      // Nếu đăng nhập thành công, chuyển hướng đến trang web chính của bạn
      window.location.href = "QLSV.html";
    } else {
      // Nếu thông tin đăng nhập không chính xác, hiển thị thông báo lỗi hoặc thực hiện các hành động khác
      alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
  });
});

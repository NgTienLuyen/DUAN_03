// script.js

function showNhapForm() {
  var formNhap = document.getElementById("formNhap");
  formNhap.style.display = "block";
}
function showLoginForm() {
  window.location.href = "Login.html";
}
$(document).ready(function () {
  $("#eye").click(function () {
    $(this).toggleClass("open");
    $(this).children("i").toggleClass("fa-eye-slash fa-eye");
    if ($(this).hasClass("open")) {
      $(this).prev().attr("type", "text");
    } else {
      $(this).prev().attr("type", "password");
    }
  });
});

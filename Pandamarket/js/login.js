const pswdInput = document.querySelector(".password-input-field");
const visibilityButton = document.querySelector(".visibility-button");
const visibilityButtonImg = visibilityButton.querySelector("img");

visibilityButton.addEventListener("click", function () {
  if (pswdInput.getAttribute("type") === "password") {
    pswdInput.setAttribute("type", "text");
    visibilityButtonImg.setAttribute(
      "src",
      "/resources/login/pswd_visibility_off.png",
    );
  } else {
    pswdInput.setAttribute("type", "password");
    visibilityButtonImg.setAttribute(
      "src",
      "/resources/login/pswd_visibility_on.png",
    );
  }
});

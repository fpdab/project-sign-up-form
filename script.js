let pas = document.querySelector("#pass");
let pascon = document.querySelector("#pass-confirm");
let outp = document.querySelector("#output");
let butt = document.querySelector("#button");
let forn = document.querySelector("#form");
butt.addEventListener("click", check);

function check() {
  if (pas.value) {
    if (pas.value !== pascon.value) {
      outp.textContent = "* Passwords do not match";
      outp.style.color = "red";
      outp.style.fontSize = "13px";
    } else {
      outp.textContent = "* Passwords accepted";
      outp.style.fontSize = "15px";
      outp.style.color = "green";
      forn.submit();
    }
  }
}

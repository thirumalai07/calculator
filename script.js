let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
      if (this.innerHTML == "=") {
          if (value.innerHTML.includes("!")) {
              let number = parseInt(value.innerHTML.replace("!", ""));
              value.innerHTML = factorial(number);
          } else if (value.innerHTML.includes("^")) { 
              let parts = value.innerHTML.split("^"); 
              if (parts.length === 2) {
                  let base = parseFloat(parts[0]);
                  let exponent = parseFloat(parts[1]);
                  value.innerHTML = Math.pow(base, exponent);
              } else {
                  value.innerHTML = "Error"; 
              }
          } else if (value.innerHTML.includes("%")) {
           
            let number = parseFloat(value.innerHTML.replace("%", ""));
            value.innerHTML = number / 100; 
          } else {  
              value.innerHTML = eval(value.innerHTML);
            }
    } else if (this.innerHTML == "Del") {
        value.innerHTML = "";
      } else if (this.innerHTML == "CE") {   
        value.innerHTML = value.innerHTML.slice(0, -1);
      } else {
        value.innerHTML += this.innerHTML;
      }
  });
}


toggleBtn.onclick = function () {
  body.classList.toggle("dark");
};
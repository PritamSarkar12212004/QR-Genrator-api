// this is all let section
let input = document.querySelector("#input");
let btn = document.querySelector("#genrate");
const qr = document.querySelector("#img");
const info = document.querySelector("#info");
const sec=document.querySelector("section")
// error frist step
const inputValu = input.value;

//city name input
const city = inputValu;
console.log(inputValu)

//api fetch
const api = fetch(
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    city +
    ".com"
);
console.log(inputValu)
//this is click function
btn.addEventListener("click", () => {
  if (inputValu == "") {
    alert("plz enter the website name");
  } else {
    btn.style.display="none"
    // qr show
    sec.style.display="block"

    //api formet
      api
        .then((response) => {
          return response;
        })
        .then((result) => {
          console.log(result);

          //add qr code
          qr.src=result.url
        });

        //add website name
        info.innerHTML=inputValu

  }
});



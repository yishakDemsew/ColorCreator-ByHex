const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let button = document.querySelector("#btn");
let body = document.body;
let hexValue = document.querySelector(".color");
let moto = document.querySelector(".moto");

// let hexDigits = "#";

button.addEventListener("click", function (e) {
    let hexDigits = "#";
    for (let i = 0; i < 6; i++) {
        hexDigits += hex[randomNum()];
    }

    body.style.backgroundColor = hexDigits;
    console.log(hexDigits);
    moto.style.color = hexDigits;
    hexValue.textContent = hexDigits;
});

// a funtcion to generate random number from the above array i.e between 0 - 16
function randomNum() {
    let random = Math.floor(Math.random() * hex.length);
    // console.log(random);
    return random;
}

// randomNum();

let button = document.querySelector(".button");
let password = document.querySelector(".password");
let eight = document.querySelector("#eight");
let ten = document.querySelector("#ten");
let twelve = document.querySelector("#twelve");
let fourteen = document.querySelector("#fourteen");
let copy = document.querySelector(".fa-clipboard");

const characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "@",
  "#",
  "%",
  "^",
  "&",
  "*",
  "{",
  "}",
  "[",
  "_",
  "]",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
];

button.addEventListener("click", () => {
  let newPassword = characters.sort(() => 0.5 - Math.random());
  if (eight.checked === true) {
    newPassword = newPassword.slice(0, 8);
  } else if (ten.checked === true) {
    newPassword = newPassword.slice(0, 10);
  } else if (twelve.checked === true) {
    newPassword = newPassword.slice(0, 12);
  } else if (fourteen.checked === true) {
    newPassword = newPassword.slice(0, 14);
  } else newPassword = newPassword.slice(0, 6);

  copy.style.display = "block";

  password.innerHTML = newPassword.join(" ");
});

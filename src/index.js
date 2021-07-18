import "normalize.css";
import "./style.css";

// ? variables of tag

const inputBill = document.getElementById("input-bill");
const inputPeople = document.getElementById("input-people");
const inputCustom = document.getElementById("input-custom");
const inputReset = document.getElementById("input-reset");

const form = document.getElementById("form");
const calculatorContainer = document.querySelector(
   ".calculator__container"
);

let valueBill = 0;
let valuePeople = 0;
let valueCustom = 0;

const handleValue = (value) => {
   console.log(value);
};

// ! ---------------------
// ? events of listening

// * value custom of buttons
calculatorContainer.addEventListener("click", (e) => {
   e.stopPropagation();
   if (e.target.dataset.value) {
      valueCustom = Number.parseFloat(e.target.dataset.value);
      handleValues();
   }
});

inputCustom.addEventListener("keyup", (e) => {
   valueCustom = handleValue(e);

   //    console.log("target" + Number.parseFloat(e.target.value));

   //    if (e.keyCode < 45 || e.keyCode > 57) e.returnValue = false;
   //    else {
   //       valueCustom = Number.parseFloat(e.target.value);
   //       handleValues();
   //    }
});

// ?
// * value of the bill
inputBill.addEventListener("keyup", (e) => {
   valueBill = handleValue(e);

   //    if (e.keyCode < 45 || e.keyCode > 57) e.returnValue = false;
   //    else {
   //       valueBill = Number.parseFloat(e.target.value);
   //       handleValues();
   //    }
});

// * value of person numbers
inputPeople.addEventListener("keyup", (e) => {
   valuePeople = handleValue(e);

   //    if (e.keyCode < 45 || e.keyCode > 57) e.returnValue = false;
   //    else {
   //       valuePeople = Number.parseFloat(e.target.value);
   //       handleValues();
   //    }
});

// * form
form.addEventListener("submit", (e) => {
   e.preventDefault();
});

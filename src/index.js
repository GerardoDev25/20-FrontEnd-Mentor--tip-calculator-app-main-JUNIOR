import "normalize.css";
import "./style.css";

// ? variables of tag
const inputBill = document.getElementById("input-bill");
const inputPeople = document.getElementById("input-people");
const inputCustom = document.getElementById("input-custom");
const inputReset = document.getElementById("input-reset");

const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");

const form = document.getElementById("form");

const calculatorContainer = document.querySelector(
   ".calculator__container"
);
const buttonsArr = document.querySelectorAll(
   ".calculator__percentage"
);

// ? value of inputs
let valueBill = 0;
let valuePeople = 0;
let valueCustom = 0;

const handleValues = () => {
   let value1 = 0;
   let value2 = 0;
   if (valueBill > 0 && valuePeople > 0 && valueCustom > 0) {
      value1 = ((valueBill / valuePeople) * valueCustom) / 100;
      price1.textContent = value1.toFixed(2);

      value2 = valueBill / valuePeople + value1;
      price2.textContent = value2.toFixed(2);

      inputReset.removeAttribute("disabled");
   }
};

// ! ---------------------
// ? events of listening

// * value custom of buttons
calculatorContainer.addEventListener("click", (e) => {
   e.stopPropagation();

   if (e.target.dataset.value) {
      buttonsArr.forEach((button) =>
         button.classList.remove(
            "calculator__percentage--active"
         )
      );
      inputCustom.value = "";
      e.target.classList.add("calculator__percentage--active");
      valueCustom = Number.parseFloat(e.target.dataset.value);
      handleValues();
   }
});

// ?
// * value of the bill
inputBill.addEventListener("keyup", (e) => {
   valueBill = Number.parseFloat(e.target.value);
   handleValues();
});

inputCustom.addEventListener("keyup", (e) => {
   valueCustom = Number.parseFloat(e.target.value);

   buttonsArr.forEach((button) =>
      button.classList.remove("calculator__percentage--active")
   );
   handleValues();
});

// * value of person numbers
inputPeople.addEventListener("keyup", (e) => {
   valuePeople = Number.parseFloat(e.target.value);
   handleValues();
});

// * reset the form
inputReset.addEventListener("click", () => {
   buttonsArr.forEach((button) =>
      button.classList.remove("calculator__percentage--active")
   );
   inputBill.value = "";
   inputPeople.value = "";
   inputCustom.value = "";

   valueBill = 0;
   valueCustom = 0;
   valuePeople = 0;

   price1.textContent = "0";
   price2.textContent = "0";

   inputReset.setAttribute("disabled", "disabled");
});

// * form
form.addEventListener("submit", (e) => {
   e.preventDefault();
});

const resultC = document.querySelector(".resultC");
const resultF = document.querySelector(".resultF");

let converterC = () => {
  const valueGet1 = document.querySelector(".valueC").value;
  const result1 = (valueGet1 * 9) / 5 + 32;
  resultC.textContent = result1.toFixed(2) + "℉";
};
document.querySelector(".btnC").addEventListener("click", (e) => {
  converterC();
});
let converterF = () => {
  const valueGet1 = document.querySelector(".valueF").value;
  const result2 = ((valueGet1 - 32) * 5) / 9;
  resultF.textContent = result2.toFixed(2) + "℃";
};
document.querySelector(".btnF").addEventListener("click", (e) => {
  converterF();
  valueGet1.textContent = 0;
  consol.log(valueGet1.textContent);
});

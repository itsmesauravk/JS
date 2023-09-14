const load1 = document.getElementById("load1");
const load2 = document.getElementById("load2");
const btn = document.getElementById("btn");
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");

const timer = () => {
  setTimeout(() => {
    load1.style.display = "none";
    load2.style.display = "flex";
    msg1.style.display = "flex";
  }, 5000);
  setTimeout(() => {
    load2.style.display = "none";
    msg2.style.display = "flex";
  }, 9000);
};

btn.addEventListener("click", () => {
  load1.style.display = "flex";
  load2.style.display = "none";
  msg1.style.display = "none";
  msg2.style.display = "none";
  timer();
});

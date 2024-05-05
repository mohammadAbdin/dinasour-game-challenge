import { randomNumber1 } from "./displaying_cactus.js";
const cactus_container = document.getElementById("cactus-container");

let cactusdiv;
const removeChilds = () => {
  // console.log(randomNumber1);
  setTimeout(() => {
    while (cactus_container.firstChild) {
      cactus_container.removeChild(cactus_container.firstChild);
    }
  }, 2000);
};

const creatingcactusDiv = () => {
  cactusdiv = document.createElement("div");
  cactus_container.appendChild(cactusdiv);
  cactusdiv.className = "cactus";
};

const cactus1 = () => {
  console.log("cactus1");
  creatingcactusDiv();
  const cactus1 = document.createElement("img");
  cactus1.src = "assets/cactus.png";
  cactus1.style.width = "50px";
  cactus1.style.height = "80px";
  cactusdiv.appendChild(cactus1);
  removeChilds();
};
const cactus2 = () => {
  console.log("cactus2");

  const cactus2 = document.createElement("img");
  cactus2.src = "assets/cactus.png";
  cactus2.style.width = "25px";
  cactus2.style.height = "40px";
  cactus2.style.transform = "rotateY(180deg)";
  cactusdiv.appendChild(cactus2);
  removeChilds();
};
const cactus3 = () => {
  const cactus3 = document.createElement("img");
  cactus3.src = "assets/cactus.png";
  cactus3.style.width = "50px";
  cactus3.style.height = "80px";
  cactus3.style.transform = "rotateY(180deg)";
  cactusdiv.appendChild(cactus3);
  removeChilds();
};
export { cactus1, cactus2, cactus3 };

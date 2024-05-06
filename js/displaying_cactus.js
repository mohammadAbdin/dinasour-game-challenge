// import { cactus1, cactus2, cactus3, cactusdiv } from "./cactusType.js";
const cactus_container = document.getElementById("cactus-container");
let isLive = true;

let cactusdiv;
const removeChilds = () => {
  if (isLive)
    setTimeout(() => {
      while (cactus_container.firstChild) {
        cactus_container.removeChild(cactus_container.firstChild);
      }
    }, 2000);
  // console.log("delete");
};

const creatingcactusDiv = () => {
  cactusdiv = document.createElement("div");
  cactus_container.appendChild(cactusdiv);
  cactusdiv.id = "cactus";
};

const cactus1 = () => {
  // console.log("cactus1");
  creatingcactusDiv();
  const cactus1 = document.createElement("img");
  cactus1.src = "assets/cactus.png";
  cactus1.style.width = "50px";
  cactus1.style.height = "80px";
  cactusdiv.appendChild(cactus1);
  removeChilds();
};
const cactus2 = () => {
  // console.log("cactus2");

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
const dinosaur = document.querySelector("#dinosaur");
let randomNumber;
let randomNumber1;
randomNumber1 = Math.floor(Math.random() * 1200 + 1501);

const cactusType = [1, 2, 3];
const getRandom = () => {
  if (isLive) {
    randomNumber = Math.floor(Math.random() * 3 + 1);

    // console.log(randomNumber);

    switch (randomNumber) {
      case cactusType[0]:
        cactus1();
        break;
      case cactusType[1]:
        cactus1();
        cactus2();
        break;
      case cactusType[2]:
        cactus1();
        cactus2();
        cactus3();

        break;
    }
  }
  // for (const cactus of cactusdiv) {
};

setInterval(getRandom, randomNumber1);
export { randomNumber1 };

function isColliding(cactus, dinosaur) {
  const cactusRect = cactus.getBoundingClientRect();

  // console.log(cactusRect);
  const dinosaurRect = dinosaur.getBoundingClientRect();
  if (
    cactusRect.left < dinosaurRect.right &&
    cactusRect.right > dinosaurRect.left &&
    cactusRect.top < dinosaurRect.bottom &&
    cactusRect.bottom > dinosaurRect.top
  ) {
    const lost = cactusRect;

    isLive = false;
    console.log("game over");
    cactus.style.animation = "none";
    dinosaur.style.animation = "none";
  }
  setTimeout(() => {
    isColliding(cactusdiv, dinosaur);
  }, 300);
}

setTimeout(() => {
  setInterval(isColliding(cactusdiv, dinosaur), 100);
}, 3000);

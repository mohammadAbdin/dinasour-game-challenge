import { cactus1, cactus2, cactus3 } from "./cactusType.js";
const isLive = true;
let randomNumber;
let randomNumber1;
randomNumber1 = Math.floor(Math.random() * 1200 + 1501);

const cactusType = [1, 2, 3];
const getRandom = () => {
  randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log(randomNumber);

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
};

setInterval(getRandom, randomNumber1);
export { randomNumber1 };

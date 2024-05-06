const dinosaur = {
  position: [0],
  dinosaur: document.querySelector("#dinosaur"),
  move: function () {
    // this.dinosaur.setAttribute("src", `./assets/dinosaur-v2.png`);
    setTimeout(() => {
      this.dinosaur.setAttribute("src", `./assets/dinasour.png`);
    }, 1000);
  },
  jump: function () {
    dinosaur.dinosaur.setAttribute("src", `./assets/dinosaur-v2.png`);
    this.dinosaur.classList.add("jump");

    setTimeout(() => {
      this.dinosaur.classList.remove("jump");
      this.dinosaur.setAttribute("src", `./assets/dinasour.png`);
    }, 1500);
  },
};

document.addEventListener("click", function () {
  dinosaur.jump();
});

document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    dinosaur.jump();
  }
});

// setInterval(() => {
//   dinosaur.move();
// }, 2000);

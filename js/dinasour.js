const dinosaur = {
  position: [0],
  dinosaur: document.querySelector("#dinosaur"),
  move: function () {
    this.dinosaur.setAttribute("src", `./assets/dinasour-jump.PNG`);
    setTimeout(() => {
      this.dinosaur.setAttribute("src", `./assets/dinasour.png`);
    }, 1000);
  },
  jump: function () {
    setTimeout(() => {
      this.dinosaur.classList.add("jump");
    }, 200);
    setTimeout(() => {
      this.dinosaur.classList.remove("jump");
    }, 1000);
  },
  isLive: () => {},
};

while (true) {
  dinosaur.move();
  document.addEventListener("click", function () {
    dinosaur.jump();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
      dinosaur.jump();
    }
  });
  dinosaur.isLive();
}

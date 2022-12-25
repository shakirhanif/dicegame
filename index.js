const diceButton = document.querySelector(".btn");
diceButton.addEventListener("click", () => {
  var ran = (Math.round(Math.random() * 12) % 6) + 1;
  var ran_image = "images/dice" + ran + ".png";
  document.querySelector(".img1").setAttribute("src", ran_image);
  var ran2 = (Math.round(Math.random() * 12) % 6) + 1;
  var ran_image = "images/dice" + ran2 + ".png";
  document.querySelector(".img2").setAttribute("src", ran_image);
  if (ran === ran2) {
    document.querySelector("h1").textContent = "Draw";
  } else if (ran > ran2) {
    document.querySelector("h1").textContent = "Player One Win";
  } else {
    document.querySelector("h1").textContent = "Player Two Win";
  }
});

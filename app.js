const colors = [
  "#8B8940",
  "#B2EC5D",
  "#f34723",
  "#2b2517",
  "#ddadaf",
  "#003841",
  "#faebd7",
  "#1dacd6",
  "#693623",
  "#ace1af",
];
let index = 0;

document.querySelector("button").addEventListener("click", () => {
  document.body.style.backgroundColor = colors[index++];
  if (index === colors.length) index = 0;
});

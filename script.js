let myEmojis = ["👨‍💻", "⛷", "🍲"];
const container = document.getElementById("emojiContainer");
const button = document.getElementById("push-btn");
const input = document.getElementById("emoji-input");

// for (let i = 0; i < myEmojis.length; i++) {
//   const emoji = document.createElement("span");
//   emoji.textContent = myEmojis[i];
//   emojiContainer.append(emoji);
// }

function render() {
  for (let index of myEmojis) {
  }
  container.innerHTML = `<span>${myEmojis}</span>`;
}

render();

button.addEventListener("click", function () {
  if (input.value) {
    myEmojis.push(input.value);
    input.value = "";
    container.innerHTML = "";
    render();
  }
});

let myEmojis = ["👨‍💻", "⛷", "🍲"];
const container = document.getElementById("emojiContainer");
const button = document.getElementById("push-btn");
const input = document.getElementById("emoji-input");
const unshift = document.getElementById("front-btn");

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

// Push Button
button.addEventListener("click", function () {
  if (input.value) {
    myEmojis.push(input.value);
    input.value = "";
    container.innerHTML = "";
    render();
  }
});

// Unshift Button
unshift.addEventListener("click", function () {
  if (input.value) {
    myEmojis.unshift(input.value);
    input.value = "";
    container.innerHTML = "";
    render();
  }
});

const myEmojis = ["👨‍💻", "⛷", "🍲"];
const container = document.getElementById("emojiContainer");

// for (let i = 0; i < myEmojis.length; i++) {
//   const emoji = document.createElement("span");
//   emoji.textContent = myEmojis[i];
//   emojiContainer.append(emoji);
// }

for (let index of myEmojis) {
  console.log(container);
}

container.innerHTML = `<span>${myEmojis}</span>`;

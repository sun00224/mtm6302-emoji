"use strict";

const emojis = [
  { type: "dec", value: 128512 }, // 😀
  { type: "dec", value: 128513 }, // 😁
  { type: "dec", value: 128514 }, // 😂
  { type: "dec", value: 128515 }, // 😃
  { type: "dec", value: 128516 }, // 😄
  { type: "dec", value: 128517 }, // 😅
  { type: "dec", value: 128518 }, // 😆
  { type: "dec", value: 128519 }, // 😇
  { type: "dec", value: 128520 }, // 😈
  { type: "dec", value: 128521 }, // 😉
  { type: "dec", value: 128522 }, // 😊
  { type: "dec", value: 129409 }, // 🦁
  { type: "hex", value: "1F984" }, // 🦄
  { type: "hex", value: "1F680" }, // 🚀
];

function toEntity(item) {
  if (item.type === "hex") {
    return `&#x${item.value};`;
  }
  return `&#${item.value};`;
}

function toLabel(item) {
  if (item.type === "hex") {
    return `0x${item.value.toUpperCase()}`;
  }
  return String(item.value);
}

function createEmojiCard(item) {
  const card = document.createElement("article");
  card.className = "emoji-card";

  const emojiSpan = document.createElement("span");
  emojiSpan.className = "emoji-char";
  // Requirement: use decimal/hex reference to insert emoji
  emojiSpan.innerHTML = toEntity(item);

  const codeEl = document.createElement("code");
  codeEl.className = "emoji-code";
  codeEl.textContent = toLabel(item);

  card.appendChild(emojiSpan);
  card.appendChild(codeEl);

  return card;
}

function renderEmojiGallery(list) {
  const gallery = document.getElementById("emoji-gallery");
  if (!gallery) return;

  const fragment = document.createDocumentFragment();
  for (const item of list) {
    fragment.appendChild(createEmojiCard(item));
  }

  gallery.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", () => {
  renderEmojiGallery(emojis);
});

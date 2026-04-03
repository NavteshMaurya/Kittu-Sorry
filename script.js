const messages = [
  "I know I hurt you... and I'm truly sorry 😔",
  "You are the most special person in my life ❤️",
  "Your smile means everything to me 😊 KittuBeta",
  "I hate seeing you upset because of me 💔",
  "Please forgive me, my love 🙏 mera pyara sa bccha",
  "I promise to make you happy always 💖",
  "I love you so much KittuBaby ❤️",
  "Apke ache ke liye hi mana kia lekin tarika galat tha, sorry 😔",
];

let index = 0;

const mainBtn = document.getElementById('mainBtn');
const message = document.getElementById('message');
const choices = document.getElementById('choices');
const forgiveText = document.getElementById('forgiveText');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

mainBtn.addEventListener('click', () => {
  index++;
  if (index < messages.length) {
    message.textContent = messages[index];
  } else {
    mainBtn.style.display = 'none';
    forgiveText.style.display = 'block';
    choices.style.display = 'block';
  }
  createHeart();
});

yesBtn.addEventListener('click', () => {
  message.textContent = "Yay! I love you forever ❤️🥰,I love you soo much mera pyara sa wifuBaby";
  choices.style.display = 'none';
  forgiveText.style.display = 'none';
  burstHearts();
});

noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

function burstHearts() {
  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 100);
  }
}

const jokeButton = document.querySelector(".btn-joke");
const jokeBox = document.querySelector(".joke-box");
// JOKE REQ FROM DAD JOKES API
const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com", config);
  return res.data.joke;
};

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  jokeBox.innerHTML = jokeText;
  jokeBox.style.border = "3px outset #e3ca0a";
};

jokeButton.addEventListener("click", addNewJoke);

function playSound() {
  const audio_1 = document.getElementById("playSound");
  audio_1.play();
}

function jokeSound() {
  const audio_2 = document.getElementById("jokeSound");
  // audio_2.play();
  audio_2.pause();
  audio_2.currentTime = 0;
  audio_2.play();
}

// get current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const counter = document.querySelector(".counter");
const buttonPlus = document.querySelector(".button--plus");
const buttonMinus = document.querySelector(".button--minus");
const buttonStart = document.querySelector(".button--start");
const buttonStop = document.querySelector(".button--stop");
const slider = document.querySelector(".slider");
// const sliderValue = document.getElementById("sliderValue");

// Audio speed 1 sec

let count = Number(counter.textContent);
const audio = new Audio("beat.mp3");

// audio.volume = 0.5;
audio.playbackRate = count / 60;

buttonStart.addEventListener("click", () => {
  audio.play();
  audio.loop = true;
  console.log("audio duration", audio.duration);
});

buttonStop.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0; // reset audio
});

buttonPlus.addEventListener("click", () => {
  count += 1;
  counter.textContent = count;
  audio.playbackRate = count / 60;
  console.log("Updated Playback Rate:", audio.playbackRate);
  console.log("type of count", typeof count);
});

buttonMinus.addEventListener("click", () => {
  count -= 1;
  counter.textContent = count;
  audio.playbackRate = count / 60;
  console.log("Updated Playback Rate:", audio.playbackRate);
  console.log("type of count", typeof count);
});

slider.addEventListener("input", () => {
  counter.textContent = slider.value;
  count = Number(slider.value);
  audio.playbackRate = count / 60;
  console.log("Updated Playback Rate:", audio.playbackRate);
  console.log("type of count", typeof count);
});

console.log("audio duration", audio.duration);
console.log("Playback rate", audio.playbackRate);

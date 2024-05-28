const myVideoElement = document.getElementById(`myVideo`);
const playPauseBtnElement = document.getElementById(`playPauseBtn`);
const prevBtnElement = document.getElementById(`prevBtn`);
const nextBtnElement = document.getElementById(`nextBtn`);
const volumeBtnElement = document.getElementById(`volumeBtn`);
const videoSize = document.getElementById(`video-size`);
const currentTimeElement = document.getElementById(`currentTime`);
const durationElement = document.getElementById(`duration`);
const videoContainerElement = document.querySelector(`.video-container`);

myVideoElement.addEventListener(`canplaythrough`, onVideoLoad);
myVideoElement.addEventListener(`timeupdate`, onTimeUpdate);
volumeBtnElement.addEventListener(`click`, muteVoice);
playPauseBtnElement.addEventListener(`click`, playPausEvent);
nextBtnElement.addEventListener(`dblclick`, nextSeconndsUpdate);
myVideoElement.addEventListener(`dblclick`, dublClick);
videoSize.addEventListener("click", dublClick);
myVideoElement.addEventListener(`click`, playPausEvent);

let isPlaying = false;
let voise = true;

function playPausEvent() {
  if (isPlaying) {
    myVideoElement.pause();
    isPlaying = false;
    playPauseBtnElement.classList.replace(`fa-pause`, `fa-play`);
    singleClick();
  } else {
    myVideoElement.play();
    isPlaying = true;
    playPauseBtnElement.classList.replace(`fa-play`, `fa-pause`);
  }
}

function onVideoLoad() {
  durationElement.textContent = formatTime(myVideoElement.duration);
}

function onTimeUpdate() {
  currentTimeElement.textContent = formatTime(myVideoElement.currentTime);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60).toString();
  const seconds = Math.floor(time % 60).toString();
  return `${minutes}:${seconds.padStart(`2`, `0`)}`;
}

function muteVoice() {
  if (voise) {
    myVideoElement.muted = true;
    voise = false;
    volumeBtnElement.classList.replace(`fa-volume-up`, `fa-volume-down`);
  } else {
    myVideoElement.muted = false;
    voise = true;
    volumeBtnElement.classList.replace(`fa-volume-down`, `fa-volume-up`);
  }
}

function dublClick() {
  videoContainerElement.classList.toggle(`myvideo-container`);
}

document.addEventListener(`keydown`, function (event) {
  if (event.key.toLocaleLowerCase() === `f`) {
    dublClick();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    videoContainerElement.classList.remove(`myvideo-container`);
  }
});

function nextSeconndsUpdate() {
  myVideo.currentTime = myVideo.currentTime + 5;
}

prevBtnElement.addEventListener(`dblclick`, function () {
  myVideo.currentTime = myVideo.currentTime - 5;
});

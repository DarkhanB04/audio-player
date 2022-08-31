let currentMusic = 0;
let isDisplayFlex = false;
const list = document.querySelector(".list");
const acc = document.querySelector(".accordion");
const contentBx = document.querySelector(".contentBx.openings");
const contentBxKpop = document.querySelector(".contentBx.kpop");
const contentBxFav = document.querySelector(".contentBx.fav");

const labels = document.querySelector(".labels.openings");
const labelsKpop = document.querySelector(".labels.kpop");
const labelsFav = document.querySelector(".labels.fav");

window.addEventListener("load", () => {
  setMusic(currentMusic);
  playingNow();
});
for (let i = 0; i < songs.length - 74; i++) {
  let rowOpening = `<div class="row" id ="row" row-index="${i}">
    <img src="${songs[i].cover}" class="row-img" alt="" />
    <div class="list-text">
      <h4 class="music-name">${songs[i].name}</h4>
      <h6 class="music-artist">${songs[i].artist}</h6>
      <audio src="./audio/${songs[i].path}.mp3" id="audio" class="${songs[i].path}"></audio>
      <h6 id="${songs[i].path}"class="song-duration-list">00:00</h6>
    </div>
  </div>`;
  contentBx.insertAdjacentHTML("beforeend", rowOpening);
  let audioDur = document.querySelector(`#${songs[i].path}`);
  let audioTag = document.querySelector(`.${songs[i].path}`);

  setTimeout(() => {
    seekBar.max = music.duration;
    audioDur.innerText = formatTime(audioTag.duration);
  }, 300);
}
labels.addEventListener("click", function () {
  contentBx.classList.toggle("active");
});
for (let i = 33; i < songs.length - 28; i++) {
  let rowFav = `<div class="row fav" id ="row fav" row-index="${i}">
    <img src="${songs[i].cover}" class="row-img" alt="" />
    <div class="list-text">
      <h4 class="music-name">${songs[i].name}</h4>
      <h6 class="music-artist">${songs[i].artist}</h6>
      <audio src="./audio/${songs[i].path}.mp3" id="audio" class="${songs[i].path}"></audio>
      <h6 id="${songs[i].path}"class="song-duration-list">00:00</h6>
    </div>
  </div>`;
  contentBxFav.insertAdjacentHTML("beforeend", rowFav);
  let audioDur = document.querySelector(`#${songs[i].path}`);
  let audioTag = document.querySelector(`.${songs[i].path}`);

  setTimeout(() => {
    seekBar.max = music.duration;
    audioDur.innerText = formatTime(audioTag.duration);
  }, 300);
}
labelsFav.addEventListener("click", function () {
  contentBxFav.classList.toggle("active");
});
for (let i = songs.length - 28; i < songs.length; i++) {
  let rowKpop = `<div class="row kpop" id ="row kpop" row-index="${i}">
    <img src="${songs[i].cover}" class="row-img" alt="" />
    <div class="list-text">
      <h4 class="music-name">${songs[i].name}</h4>
      <h6 class="music-artist">${songs[i].artist}</h6>
      <audio src="./audio/${songs[i].path}.mp3" id="audio" class="${songs[i].path}"></audio>
      <h6 id="${songs[i].path}"class="song-duration-list">00:00</h6>
    </div>
  </div>`;
  contentBxKpop.insertAdjacentHTML("beforeend", rowKpop);
  let audioDur = document.querySelector(`#${songs[i].path}`);
  let audioTag = document.querySelector(`.${songs[i].path}`);

  setTimeout(() => {
    seekBar.max = music.duration;
    audioDur.innerText = formatTime(audioTag.duration);
  }, 300);
}
labelsKpop.addEventListener("click", function () {
  contentBxKpop.classList.toggle("active");
});

const music = document.getElementById("audio");
const songName = document.querySelector(".song-name");
const songArtist = document.querySelector(".song-artist");
const playBtn = document.querySelector(".play-btn");
const forwardBtn = document.querySelector(".forward-btn");
const backwardBtn = document.querySelector(".backward-btn");
const heartBtn = document.querySelector(".heart");
const seekBar = document.querySelector(".seek-bar");
const currentTime = document.querySelector(".current-time");
const songDuration = document.querySelector(".song-duration");
const img = document.querySelector(".audio-img");

const toggle = document.querySelector(".toggle");
const musicList = document.querySelector(".music-list-container");
const toggleFont = document.querySelector(".toggle-font");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  musicList.classList.toggle("active");
  document.body.classList.toggle("active");
  document.querySelector(".music-container").classList.toggle("active");
  if (toggle.classList.contains("active")) {
    toggleFont.classList.remove("fa-fa-bars");
    toggleFont.classList.add("fa-xmark");
  } else {
    toggleFont.classList.remove("fa-xmark");
    toggleFont.classList.add("fa-fa-bars");
  }
});

playBtn.addEventListener("click", () => {
  const isMusicPaused = playBtn.classList.contains("fa-pause");
  if (isMusicPaused) {
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
    document.querySelector(".img-container").classList.remove("animate");
    img.classList.remove("animate");
    music.pause();
    return;
  }
  document.querySelector(".img-container").classList.add("animate");
  img.classList.add("animate");
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");
  music.play();
});

const setMusic = (i) => {
  seekBar.value = 0;
  let song = songs[i];
  currentMusic = i;
  music.src = `./audio/${song.path}.mp3`;
  songName.innerHTML = song.name;
  songArtist.innerHTML = song.artist;
  img.src = song.cover;
  currentTime.innerHTML = "00:00";
  document.body.style.background = `url(${song.cover}) no-repeat center `;
  document.body.style.backgroundSize = "cover";
  document.body.style.height = "100vh";
  document.body.style.width = "100%";
  document.body.style.backdropFilter =
    "blur(16px) brightness(0.4) contrast(90%) saturate(110%)";
  document.body.style["-webkit-backdrop-filter"] =
    "blur(16px) brightness(0.4) contrast(90%) saturate(110%)";

  setTimeout(() => {
    seekBar.max = music.duration;
    songDuration.innerHTML = formatTime(music.duration);
  }, 300);
};
setMusic(currentMusic);

const againAudio = document.querySelector(".fa-arrow-rotate-right");
againAudio.addEventListener("click", function () {
  setMusic(currentMusic);
  playMusic();
});

function formatTime(time) {
  let min = Math.floor(time / 60);
  min = min < 10 ? "0" + min : min;
  let sec = Math.floor(time) % 60;
  sec = sec < 10 ? "0" + sec : sec;
  return `${min}:${sec}`;
}

setInterval(() => {
  if (formatTime(music.currentTime) == formatTime(music.duration)) {
    forwardBtn.click();
    return;
  }
  seekBar.value = music.currentTime;
  currentTime.innerHTML = formatTime(music.currentTime);
}, 500);

seekBar.addEventListener("change", () => {
  music.currentTime = seekBar.value;
});
const playMusic = () => {
  music.play();
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");
  img.classList.add("animate");
};
forwardBtn.addEventListener("click", () => {
  if (currentMusic > songs.length - 2) {
    currentMusic = 0;
  } else {
    currentMusic++;
  }
  if (heartBtn.classList.contains("fa-heart-circle-check")) {
    heartBtn.classList.remove("fa-heart-circle-check");
    heartBtn.classList.add("fa-heart-circle-plus");
  }
  setMusic(currentMusic);
  playingNow();
  playMusic();
});
backwardBtn.addEventListener("click", () => {
  if (currentMusic <= 0) {
    currentMusic = songs.length - 1;
  } else {
    currentMusic--;
  }
  if (heartBtn.classList.contains("fa-heart-circle-check")) {
    heartBtn.classList.remove("fa-heart-circle-check");
    heartBtn.classList.add("fa-heart-circle-plus");
  }
  setMusic(currentMusic);
  playingNow();
  playMusic();
});
const isSongLooped = false;
heartBtn.addEventListener("click", () => {
  if (heartBtn.classList.contains("fa-heart-circle-plus")) {
    heartBtn.classList.remove("fa-heart-circle-plus");
    heartBtn.classList.add("fa-heart-circle-check");
    return;
  } else {
    heartBtn.classList.remove("fa-heart-circle-check");
    heartBtn.classList.add("fa-heart-circle-plus");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight" || event.key === "d") {
    forwardBtn.click();
  } else if (event.key === "ArrowLeft" || event.key === "a") {
    backwardBtn.click();
  } else if (event.key === " ") {
    playBtn.click();
  }
});

const allRows = document.querySelectorAll(".row");

function playingNow() {
  for (let j = 0; j < allRows.length; j++) {
    if (allRows[j].classList.contains("played")) {
      allRows[j].classList.remove("played");
    }
    if (allRows[j].getAttribute("row-index") == currentMusic) {
      allRows[j].classList.add("played");
    }
    allRows[j].setAttribute("onclick", "clicked(this)");
  }
}

function clicked(element) {
  let getRowIndex = element.getAttribute("row-index");
  currentMusic = getRowIndex;
  document.querySelector(".img-container").classList.add("animate");
  if (heartBtn.classList.contains("fa-heart-circle-check")) {
    heartBtn.classList.remove("fa-heart-circle-check");
    heartBtn.classList.add("fa-heart-circle-plus");
  }

  setMusic(currentMusic);
  playMusic();
  playingNow();
}

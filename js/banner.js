let contentArr = ["digital", "print", "broadcast", "conceptual", "creative"];
let textColor = ["#DEF034", "#EA5E39", "#DEF034", "#EA5E39", "#FFFFFF"];
const landingTitle = document.getElementById("landing-title");
let logoHg = document.getElementById("logo-hogarth");
let firstText = document.getElementById("firstText");
let secondText = document.getElementById("secondText");
let thirdText = document.getElementById("thirdText");
let fourthText = document.getElementById("fourthText");
let arrowIcon = document.getElementById("arrow");
let replyBut = document.getElementById("reply_button");
let imgBg = document.getElementById("img-bg");
let languageIndex = 0;

var fadeInterval;
function init() {
  firstText.classList.add("drop-in");
  secondText.classList.add("drop-in-2");

  logoHg.classList.add("fadein");

  thirdText.classList.add("drop-in-2");
  fadeInterval = setInterval(changeHeading, 3000);
}
// Function to modify the text

function changeHeading() {
  /* Case where the language index has gone out of bounds of the array; reshuffle array and
       reset text */

  if (languageIndex === contentArr.length) {
    clearInterval(fadeInterval);
    endFrame();
  } else {
    // Iterate through the random language selected, changing each DOM element sequentially
    fadeAnimation();
    const language = contentArr[languageIndex];
    landingTitle.textContent = language;
    landingTitle.style.color = textColor[languageIndex];

    //setTimeout(() => toTitle.textContent = language[1], 1000)
    //   setTimeout(() => landingTitle.textContent = contentArr[1], 2000)

    languageIndex++;
  }
}

function fadeAnimation() {
  const landingTitle = document.getElementById("landing-title");

  landingTitle.classList.remove("fadein");

  setTimeout(() => landingTitle.classList.add("fadein"), 3000);
}

function endFrame() {
  fourthText.classList.add("activeBtmfadeout");
  arrowIcon.classList.add("activeButton");

  replyBut.classList.add("activeReply");
  imgBg.classList.add("slowzoom1");
  replyBut.addEventListener("click", function (e) {
    reply();
  });
}

function reply() {
  replyBut.classList.remove("activeReply");
  imgBg.classList.remove("slowzoom1");
  firstText.classList.remove("drop-in");
  secondText.classList.remove("drop-in-2");
  logoHg.classList.remove("fadein");
  thirdText.classList.remove("drop-in-2");
  fourthText.classList.remove("activeBtmfadeout");
  arrowIcon.classList.remove("activeButton");
  landingTitle.classList.remove("fadein");
  landingTitle.textContent = "";
  languageIndex = 0;
  setTimeout(() => init(), 50);
}

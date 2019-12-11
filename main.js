var bannerStatus = 1;
var bannerTimer = 4000;

// on  load function for banner//
window.onload = () => {
  bannerLoop();
};

var startBannerLoop = setInterval(() => {
  bannerLoop();
}, bannerTimer);

//mouse over pause//

document.getElementById("main-banner").onmouseenter = () => {
  clearInterval(startBannerLoop);
};

//mouse leave continue//
document.getElementById("main-banner").onmouseleave = () => {
  startBannerLoop = setInterval(() => {
    bannerLoop();
  }, bannerTimer);
};

//previous button !not working in  order???//

document.getElementById("imgbanbtn-prev").onclick = () => {
  if (bannerStatus === 1) {
    bannerStatus = 4;
  } else if (bannerStatus === 2) {
    bannerStatus = 5;
  } else if (bannerStatus === 3) {
    bannerStatus = 1;
  } else if (bannerStatus === 4) {
    bannerStatus = 2;
  } else if (bannerStatus === 5) {
    bannerStatus = 3;
  }
  bannerLoop();
};
function prev() {
  if (bannerStatus === 1) {
    bannerStatus = 4;
  } else if (bannerStatus === 2) {
    bannerStatus = 5;
  } else if (bannerStatus === 3) {
    bannerStatus = 1;
  } else if (bannerStatus === 4) {
    bannerStatus = 2;
  } else if (bannerStatus === 5) {
    bannerStatus = 3;
  }
  bannerLoop();
}
// next button
document.getElementById("imgbanbtn-next").onclick = function () {
  bannerLoop();
};

window.addEventListener("keydown", checkKeyPress);

function checkKeyPress(key) {
  if (key.keyCode == "39") {
    bannerLoop();
    // console.log("R");
  } else if (key.keyCode == "37") {
    prev();
    // console.log("L");
  }
}
// banner animation solution is there a simpiler way to manipulate the tansition?//

function bannerLoop() {
  if (bannerStatus === 1) {
    document.getElementById("imgban2").style.opacity = "0";
    // document.getElementById("imgban3").style.opacity = "0";
    // document.getElementById("imgban4").style.opacity = "0";
    // document.getElementById("imgban5").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("imgban1").style.right = "0px";
      document.getElementById("imgban1").style.zIndex = "1000";
      document.getElementById("imgban2").style.right = "-1200px";
      document.getElementById("imgban2").style.zIndex = "1500";
      document.getElementById("imgban3").style.right = "-2400px";
      document.getElementById("imgban3").style.zIndex = "500";
      document.getElementById("imgban4").style.right = "2400px";
      document.getElementById("imgban4").style.zIndex = "500";
      document.getElementById("imgban5").style.right = "1200px";
      document.getElementById("imgban5").style.zIndex = "500";
    }, 0);
    setTimeout(function () {
      document.getElementById("imgban2").style.opacity = "1";
      // document.getElementById("imgban3").style.opacity = "1";
      // document.getElementById("imgban4").style.opacity = "1";
      // document.getElementById("imgban5").style.opacity = "1";
    }, 1000);
    bannerStatus = 2;
  } else if (bannerStatus === 2) {
    document.getElementById("imgban3").style.opacity = "0";
    // document.getElementById("imgban4").style.opacity = "0";
    // document.getElementById("imgban5").style.opacity = "0";
    // document.getElementById("imgban1").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("imgban2").style.right = "0px";
      document.getElementById("imgban2").style.zIndex = "1000";
      document.getElementById("imgban3").style.right = "-1200px";
      document.getElementById("imgban3").style.zIndex = "1500";
      document.getElementById("imgban4").style.right = "-2400px";
      document.getElementById("imgban4").style.zIndex = "500";
      document.getElementById("imgban5").style.right = "2400px";
      document.getElementById("imgban5").style.zIndex = "500";
      document.getElementById("imgban1").style.right = "1200px";
      document.getElementById("imgban1").style.zIndex = "500";
    }, 0);
    setTimeout(function () {
      document.getElementById("imgban3").style.opacity = "1";
      // document.getElementById("imgban4").style.opacity = "1";
      // document.getElementById("imgban5").style.opacity = "1";
      // document.getElementById("imgban1").style.opacity = "1";
    }, 1000);
    bannerStatus = 3;
  } else if (bannerStatus === 3) {
    document.getElementById("imgban4").style.opacity = "0";
    // document.getElementById("imgban5").style.opacity = "0";
    // document.getElementById("imgban1").style.opacity = "0";
    // document.getElementById("imgban2").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("imgban3").style.right = "0px";
      document.getElementById("imgban3").style.zIndex = "1000";
      document.getElementById("imgban4").style.right = "-1200px";
      document.getElementById("imgban4").style.zIndex = "1500";
      document.getElementById("imgban5").style.right = "-2400px";
      document.getElementById("imgban5").style.zIndex = "500";
      document.getElementById("imgban1").style.right = "2400px";
      document.getElementById("imgban1").style.zIndex = "500";
      document.getElementById("imgban2").style.right = "1200px";
      document.getElementById("imgban2").style.zIndex = "500";
    }, 0);
    setTimeout(function () {
      document.getElementById("imgban4").style.opacity = "1";
      // document.getElementById("imgban5").style.opacity = "1";
      // document.getElementById("imgban1").style.opacity = "1";
      // document.getElementById("imgban2").style.opacity = "1";
    }, 1000);
    bannerStatus = 4;
  } else if (bannerStatus === 4) {
    document.getElementById("imgban5").style.opacity = "0";
    // document.getElementById("imgban1").style.opacity = "0";
    // document.getElementById("imgban2").style.opacity = "0";
    // document.getElementById("imgban3").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("imgban4").style.right = "0px";
      document.getElementById("imgban4").style.zIndex = "1000";
      document.getElementById("imgban5").style.right = "-1200px";
      document.getElementById("imgban5").style.zIndex = "1500";
      document.getElementById("imgban1").style.right = "-2400px";
      document.getElementById("imgban1").style.zIndex = "500";
      document.getElementById("imgban2").style.right = "2400px";
      document.getElementById("imgban2").style.zIndex = "500";
      document.getElementById("imgban3").style.right = "1200px";
      document.getElementById("imgban3").style.zIndex = "500";
    }, 0);
    setTimeout(function () {
      document.getElementById("imgban5").style.opacity = "1";
      // document.getElementById("imgban1").style.opacity = "1";
      // document.getElementById("imgban2").style.opacity = "1";
      // document.getElementById("imgban3").style.opacity = "1";
    }, 1000);
    bannerStatus = 5;
  } else if (bannerStatus === 5) {
    document.getElementById("imgban1").style.opacity = "0";
    // document.getElementById("imgban2").style.opacity = "0";
    // document.getElementById("imgban3").style.opacity = "0";
    // document.getElementById("imgban4").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("imgban5").style.right = "0px";
      document.getElementById("imgban5").style.zIndex = "1000";
      document.getElementById("imgban1").style.right = "-1200px";
      document.getElementById("imgban1").style.zIndex = "1500";
      document.getElementById("imgban2").style.right = "-2400px";
      document.getElementById("imgban2").style.zIndex = "500";
      document.getElementById("imgban3").style.right = "2400px";
      document.getElementById("imgban3").style.zIndex = "500";
      document.getElementById("imgban4").style.right = "1200px";
      document.getElementById("imgban4").style.zIndex = "500";
    }, 0);
    setTimeout(function () {
      document.getElementById("imgban1").style.opacity = "1";
      // document.getElementById("imgban2").style.opacity = "1";
      // document.getElementById("imgban3").style.opacity = "1";
      // document.getElementById("imgban4").style.opacity = "1";
    }, 1000);
    bannerStatus = 1;
  }
}

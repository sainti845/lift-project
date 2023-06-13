const lift = document.querySelector(".lift");
const down = document.getElementById("down");
const middleUp = document.getElementById("middleUp");
const middleDown = document.getElementById("middleDown");
const up = document.getElementById("up");

let currentFloor = 0; // Assuming that the list is at ground floor at the starting
let mdUp = 0,
  mdDown = 0;
console.log("hello ");

const liftReach = () => {
  let liftSound = new Audio(
    "lift-tone/elevator-ding-at-arenco-tower-dubai-38520.mp3"
  );
  liftSound.loop = false;
  liftSound.play();
};

const floorFunction = (floor) => {
  console.log(floor);
  if (floor == 2) {
    lift.style.top = "4vh";
  } else if (floor == 1) {
    lift.style.top = "38vh";
  }
  if (floor == 0) {
    lift.style.top = "72vh";
  }
  currentFloor = floor;
};

const downFunction = () => {
  console.log("hello");
  down.style.backgroundColor = "green";
  if (currentFloor == 2) {
    if (mdDown == true) {
      floorFunction(1);
      setTimeout(() => {
        liftReach();
        down.style.backgroundColor = "white";
      }, 5000);
    } else {
      lift.style.transition = "10s linear";
      floorFunction(0);
      setTimeout(() => {
        down.style.backgroundColor = "white";

        lift.style.transition = "5s linear";
        liftReach();
      }, 10000);
    }
  }
};
const upFunction = () => {
  console.log("hello");
  up.style.backgroundColor = "green";
  if (currentFloor == 0) {
    if (mdUp == true) {
      floorFunction(1);
      setTimeout(() => {
        up.style.backgroundColor = "white";
        liftReach();
      }, 5000);
    } else {
      lift.style.transition = "10s linear";
      floorFunction(2);
      setTimeout(() => {
        up.style.backgroundColor = "white";
        lift.style.transition = "5s linear";
        liftReach();
      }, 10000);
    }
  }
};

const middleUpFunction = () => {
  console.log("hello");
  mdUp = true;
  middleUp.style.backgroundColor = "green";
  if (currentFloor == 1) {
    floorFunction(2);
  }
  setTimeoutFUcntion();
};
const middleDownFunction = () => {
  console.log("hello");
  mdDown = true;
  middleDown.style.backgroundColor = "green";
  if (currentFloor == 1) floorFunction(0);
  setTimeoutFUcntion();
};

const setTimeoutFUcntion = () => {
  setTimeout(() => {
    middleDown.style.background = "white";
    middleUp.style.background = "white";
    mdUp = false;
    mdDown = false;
  }, 10000);
};

floorFunction(0);
down.addEventListener("click", downFunction);
up.addEventListener("click", upFunction);
middleUp.addEventListener("click", middleUpFunction);
middleDown.addEventListener("click", middleDownFunction);

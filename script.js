const doorImage1 = document.getElementById('door1')
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg"
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg"
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"

const doorImage2 = document.getElementById('door2')
const currentlyPlaying = true;
const doorImage3 = document.getElementById('door3');
let openDoor1 = '';
let openDoor2 = '';
let openDoor3 = '';

const numClosedDoors = 3;
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

const startButton = document.getElementById("start");

const isBot = (door) => {
if (door.src === botDoorPath) {
  return true;
} else {
  return false;
}
}

const isClicked = (door) => {
if (door.src === closedDoorPath) {
return false;
} else {
  return true;
}
}

const playDoor = () => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
  gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
}

const randomChoreDoorGenerator = () => {
const choreDoor = Math.floor(Math.random()* numClosedDoors)
if (choreDoor === 0) {
openDoor1 = botDoorPath;
openDoor2 = beachDoorPath;
openDoor3 = spaceDoorPath;
} else if (choreDoor === 1) {
openDoor2 = botDoorPath;
openDoor1 = beachDoorPath;
openDoor3 = spaceDoorPath;
} else {
openDoor3 = botDoorPath;
openDoor2 = beachDoorPath;
openDoor1 = spaceDoorPath;
}

}

doorImage1.onclick = () => {
  if(!currentlyPlaying)
  startButton(startRound());
  if (!isClicked(doorImage1)) {
doorImage1.src = openDoor1;
playDoor(doorImage1);
  }
  if(currentlyPlaying && !isClicked(door))



doorImage2.onclick = () => {
  if(!currentlyPlaying)
  startButton(startRound());
  if (!isClicked(doorImage2)){
doorImage2.src = openDoor2;
playDoor(doorImage2);
  }
  if(currentlyPlaying && !isClicked(door))
  


doorImage3.onclick = () => {
  if(!currentlyPlaying){
  startButton(startRound());
  if (!isClicked(doorImage3)){
doorImage3.src = openDoor3;
playDoor(doorImage3);
  }
  if(currentlyPlaying && !isClicked(door))



const startRound = () => {
  doorImage.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good Luck";
  currentlyPlaying = true;
randomChoreDoorGenerator()
}
  }

const gameOver = (status) => {
if (status === 'win'){
  startButton.innerHTML = "You win! Play again?";
} else {
  startButton.innerHTML = "Game over! Play again?";
}
currentlyPlaying = false;
}
}
startRound();
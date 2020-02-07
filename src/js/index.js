const pacman = document.querySelector('.entity--pac');
let backgroundStyleRight = 0;
let xpos = 100;
let ypos = 100;
const tileSize = 85;

document.addEventListener('DOMContentLoaded', () => {


  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight') {
      xpos += tileSize;
      pacman.style.left = String(xpos) + `px`;
    }
    if (backgroundStyleRight === 0) {
      pacman.style.backgroundPositionX = '0px';
      pacman.style.backgroundPositionY = '0px';
      backgroundStyleRight = 1;
      console.log(backgroundStyleRight);

    } else { 
      pacman.style.backgroundPositionX = '85px';
      pacman.style.backgroundPositionY = '0px';
      backgroundStyleRight = 0;
      console.log(backgroundStyleRight);
    }
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowLeft') {
      pacman.style.backgroundPositionX = '85px';
      xpos -= tileSize;
      pacman.style.left = String(xpos) + `px`;
    } 
    if (backgroundStyleRight === 'open') {
      pacman.style.backgroundPositionX = '0px';
      pacman.style.backgroundPositionY = '255px';
      backgroundStyleRight = 'closed';
    } else { 
      pacman.style.backgroundPositionX = '85px';
      pacman.style.backgroundPositionY = '255px';
      backgroundStyleRight = 'open';


    }
  });


  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowUp') {
      pacman.style.backgroundPositionX = '85px';
      ypos -= tileSize;
      pacman.style.top = String(ypos) + `px`;
    }
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowDown') {
      pacman.style.backgroundPositionX = '85px';
      ypos += tileSize;
      pacman.style.top = String(ypos) + `px`;
    }
  });
});






const pacman = document.querySelector('.entity--pac');
let mouth = 'closed';
let xpos = 100;
let ypos = 100;
const tileSize = 85;

const update = () => {
  pacman.style.left = String(xpos) + `px`;
  pacman.style.top = String(ypos) + `px`;
}


document.addEventListener('DOMContentLoaded', () => {

  update();



  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight') {
      xpos += tileSize;
      pacman.style.left = String(xpos) + `px`;
    if (mouth === 'closed') {
      pacman.style.backgroundPositionX = '0px';
      pacman.style.backgroundPositionY = '0px';
      mouth = 'open';
    } else { 
      pacman.style.backgroundPositionX = '85px';
      pacman.style.backgroundPositionY = '0px';
      mouth = 'closed';
    }
    }
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowLeft') {
      pacman.style.backgroundPositionX = '85px';
      xpos -= tileSize;
      pacman.style.left = String(xpos) + `px`;
   
    if (mouth === 'open') {
      pacman.style.backgroundPositionX = '0px';
      pacman.style.backgroundPositionY = '255px';
      mouth = 'closed';
    } else { 
      pacman.style.backgroundPositionX = '85px';
      pacman.style.backgroundPositionY = '255px';
      mouth = 'open';
    }
    }
  });


  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowUp') {
      pacman.style.backgroundPositionX = '85px';
      ypos -= tileSize;
      pacman.style.top = String(ypos) + `px`;
      if (mouth === 'open') {
        pacman.style.backgroundPositionX = '0px';
        pacman.style.backgroundPositionY = '85px';
        mouth = 'closed';
      } else { 
        pacman.style.backgroundPositionX = '85px';
        pacman.style.backgroundPositionY = '85px';
        mouth = 'open';
      }
    }
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowDown') {
      pacman.style.backgroundPositionX = '85px';
      ypos += tileSize;
      pacman.style.top = String(ypos) + `px`;
      if (mouth === 'open') {
        pacman.style.backgroundPositionX = '0px';
        pacman.style.backgroundPositionY = '170px';
        mouth = 'closed';
      } else { 
        pacman.style.backgroundPositionX = '85px';
        pacman.style.backgroundPositionY = '170px';
        mouth = 'open';
      }
    }
  });

});






const tileSize = 85;

class Pacman {
  constructor(xposition, yposition, mouth){
    this.xposition = xposition;
    this.yposition = yposition;
    this.mouth = mouth;
    
  }

  moveRight() {
    this.element.style.backgroundPositionX = '85px';
    this.xposition += tileSize;
  if (this.mouth === 'closed') {
    this.element.style.backgroundPositionX = '0px';
    this.element.style.backgroundPositionY = '0px';
    this.mouth = 'open';
  } else { 
    this.element.style.backgroundPositionX = '85px';
    this.element.style.backgroundPositionY = '0px';
    this.mouth = 'closed';
  }
  }

  moveLeft() {
    this.element.style.backgroundPositionX = '85px';
    this.xposition -= tileSize;
 
  if (this.mouth === 'open') {
    this.element.style.backgroundPositionX = '0px';
    this.element.style.backgroundPositionY = '255px';
    this.mouth = 'closed';
  } else { 
    this.element.style.backgroundPositionX = '85px';
    this.element.style.backgroundPositionY = '255px';
    this.mouth = 'open';
  }

  }

  moveDown() {
    this.element.style.backgroundPositionX = '85px';
    this.yposition += tileSize;
    if (this.mouth === 'open') {
      this.element.style.backgroundPositionX = '0px';
      this.element.style.backgroundPositionY = '170px';
      this.mouth = 'closed';
    } else { 
      this.element.style.backgroundPositionX = '85px';
      this.element.style.backgroundPositionY = '170px';
      this.mouth = 'open';
      }
  }

  moveUp() {
    this.element.style.backgroundPositionX = '85px';
    this.yposition -= tileSize;
    if (this.mouth === 'open') {
      this.element.style.backgroundPositionX = '0px';
      this.element.style.backgroundPositionY = '85px';
      this.mouth = 'closed';
    } else { 
      this.element.style.backgroundPositionX = '85px';
      this.element.style.backgroundPositionY = '85px';
      this.mouth = 'open';
    }
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'entity entity--pac pacboy-active-light';

    document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight') {
      this.moveRight();
      this.update();
    }
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowLeft') {
      this.moveLeft();
      this.update();
    }
  });


  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowUp') {
      this.moveUp();
      this.update();
     }
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowDown') {
      this.moveDown();
      this.update();
    }
  });
}

  update() {
    this.element.style.left = String(this.xposition) + `px`;
    this.element.style.top = String(this.yposition) + `px`;  
  }

  mount(parent) {
    this.render();
    this.update();
    parent.appendChild(this.element);
  }
}

// const app = document.querySelector('.stage');
// const pacman1 = new Pacman(100, 100, 'closed');
// pacman1.mount(app);

// document.addEventListener('DOMContentLoaded', () => {

// })
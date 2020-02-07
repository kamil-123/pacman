const tileSize = 85;

class Pacman {
  constructor(xposition, yposition, mouth, Xmax, Ymax){
    this.xposition = 0;
    this.yposition = 0;
    this.mouth = mouth;
    this.Xmax = Xmax;
    this.Ymax = Ymax;
  }

  updatexMax() {
    this.Xmax = stage1.maxX();
    return this.Xmax;
  }

  updateyMax() {
    this.Ymax = stage1.maxY();
    return this.Ymax;
  }

  moveRight() {
    this.element.style.backgroundPositionX = '85px';

    if(this.xposition === this.Xmax - 1) {
      return;
    }
    this.xposition += 1;
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

    if(this.xposition === 0) {
      return;
    }
    this.xposition -= 1;

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
    if(this.yposition === this.Ymax - 1) {
      return;
    }
    this.yposition += 1;
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
    if(this.yposition === 0) {
      return;
    }
    this.yposition -= 1;
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
    this.element.style.left = String(this.xposition*tileSize) + `px`;
    this.element.style.top = String(this.yposition*tileSize) + `px`;  
  }

  mount(parent) {
    this.render();
    this.update();
    this.updatexMax();
    this.updateyMax();
    parent.appendChild(this.element);
  }
}

// const app = document.querySelector('.stage');
// const pacman1 = new Pacman(100, 100, 'closed');
// pacman1.mount(app);

// document.addEventListener('DOMContentLoaded', () => {

// })
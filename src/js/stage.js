class stage {
  constructor(countX,countY,tileSize) {
    this.countX = countX;
    this.countY = countY;
    this.tileSize = tileSize;
  }
  maxX() {
    return this.countX;
  }
  maxY() {
    return this.countY;
  }
  render(){
    this.element = document.createElement('div');
    this.element.className='stage';
    this.element.innerHTML= (``)
    this.element.style.width=`${this.tileSize*this.countX}px`;
    this.element.style.height=`${this.tileSize*this.countY}px`;
    return this.element;
  }
  mount(parent){
    this.render();
    parent.appendChild(this.element);
  }
}


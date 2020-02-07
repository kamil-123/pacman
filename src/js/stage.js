class stage {
  constructor(countX,countY,tileSize) {
    this.countX = countX;
    this.countY = countY;
    this.tileSize = tileSize;
    this.entityArray = [];
  }

  removeEntity(entity) {
    for (let i = 0; i < this.entityArray.length; i += 1){
      if(this.entityArray[i][0] === entity[0]) {
        if(this.entityArray[i][1] === entity[1]) {
          this.entityArray.splice(i,1);
        }
      }
    }
  }
  maxX() {
    return this.countX;
  }
  maxY() {
    return this.countY;
  }
  collisionDetection(x,y){
    for (let i = 0; i < this.entityArray.length; i += 1){
      if(this.entityArray[i][0] === x) {
        if(this.entityArray[i][1] === y) {
          return this.entityArray[i];
        }
      }
    }
    return null;
  }

  render(){
    this.element = document.createElement('div');
    this.element.className='stage';
    this.element.innerHTML= (``);
    this.element.style.width=`${this.tileSize*this.countX}px`;
    this.element.style.height=`${this.tileSize*this.countY}px`;
    return this.element;
  }
  mount(parent){
    this.render();
    parent.appendChild(this.element);
  }
}


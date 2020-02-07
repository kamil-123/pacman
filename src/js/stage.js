class stage {
  constructor(countX,countY,tileSize) {
    this.countX = countX;
    this.countY = countY;
    this.tileSize = tileSize;
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

const app=document.querySelector('#app');
const stage1 = new stage(10,10,85);
stage1.mount(app);
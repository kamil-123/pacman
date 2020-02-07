class entity {
  constructor(posX,posY,type) {
    this.posX = posX;
    this.posY = posY;
    this.type = type;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = ''
  }
}
class Group {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.elements = [];
  }

  add(element) {
    this.elements.add(element);
  }

  redraw() {
    this.elements.forEach(element => {
      element.draw();
    });
  }
}

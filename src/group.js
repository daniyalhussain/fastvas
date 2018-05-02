class Group {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
  }

  draw(ctx) {
    this.ctx = ctx || this.ctx;
    this.elements.forEach((element) => {
      element.draw(this.ctx);
    });
  }
}

export default Group;

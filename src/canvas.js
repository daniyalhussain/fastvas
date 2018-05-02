class Canvas {
  constructor(ctx) {
    this.ctx = ctx;
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
    element.draw(this.ctx);
  }
}

export default Canvas;

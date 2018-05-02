class Canvas {
  constructor(ctx) {
    this.ctx = ctx;
    this.elements = [];
  }

  add(element) {
    this.elements.add(element);
    element.draw(this.ctx);
  }
}

class Text {
  constructor(x, y, width, height, text, size, font, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.font = font;
    this.color = color;
  }

  add(ctx) {
    this.ctx = ctx;
    this.draw();
  }

  edit(x, y, text, size, font, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.font = font;
    this.color = color;

    this.clear();
    this.draw();
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.font = this.font;
    this.ctx.fillText(this.text, this.x, this.y);
  }

  clear() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }
}

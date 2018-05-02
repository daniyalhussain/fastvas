class Rect {
  constructor(x, y, width, height, backgroundColor) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
  }

  add(ctx) {
    this.ctx = ctx;
    this.draw();
  }

  edit(config) {
    this.x = config.x || this.x;
    this.y = config.y || this.y;
    this.width = config.width || this.width;
    this.height = config.height || this.height;
    this.text = config.text || this.text;
    this.font = config.font || this.font;
    this.backgroundColor = config.backgroundColor || this.backgroundColor;

    this.clear();
    this.draw();
  }

  draw(ctx) {
    this.ctx = ctx || this.ctx;

    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  clear() {
    this.ctx.clearRect(this.x, this.y - this.height, this.width, this.height);
  }
}

export default Rect;

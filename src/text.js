class Text {
  constructor(x, y, width, height, text, font, color, textPartials) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.font = font;
    this.color = color;
    this.textPartials = textPartials;
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
    this.color = config.color || this.color;
    this.textPartials = config.textPartials || this.textPartials;

    this.clear();
    this.draw();
  }

  draw(ctx) {
    this.ctx = ctx || this.ctx;

    if (this.textPartials.length !== 0) {
      let previousText = '';
      let textSize = 0;

      this.textPartials.forEach((element) => {
        this.ctx.fillStyle = element.color;
        this.ctx.font = this.font;

        textSize += this.ctx.measureText(previousText).width;

        this.ctx.fillText(element.value, this.x + textSize, this.y);
        previousText = element.value;
      });
    } else {
      this.ctx.fillStyle = this.color;
      this.ctx.font = this.font;
      this.ctx.fillText(this.text, this.x, this.y);
    }
  }

  clear() {
    this.ctx.clearRect(this.x, this.y - this.height, this.width, this.height);
  }
}

export default Text;

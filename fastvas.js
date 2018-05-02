import Canvas from './src/canvas';
import Text from './src/text';
import Group from './src/group';

class Fastvas {

  static canvas(config) {
    const { ctx } = config;

    return Canvas(ctx);
  }

  static text(config) {
    const x = config.x || 0;
    const y = config.y || 0;
    const width = config.width || 0;
    const height = config.height || 0;
    const text = config.text || '';
    const size = config.size || '';
    const font = config.font || '';
    const color = config.color || '';

    return Text(x, y, width, height, text, size, font, color);
  }

  static group(config) {
    const x = config.x || 0;
    const y = config.y || 0;
    const width = config.width || 0;
    const height = config.height || 0;

    return Group(x, y, width, height);
  }
}

export default Fastvas;

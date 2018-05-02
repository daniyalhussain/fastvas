import Canvas from './src/canvas';
import Text from './src/text';
import Group from './src/group';

class Fastvas {

  static canvas(config) {
    const ctx = config;

    return new Canvas(ctx);
  }

  static text(config) {
    const x = config.x || 0;
    const y = config.y || 0;
    const width = config.width || 0;
    const height = config.height || 0;
    const text = config.text || '';
    const font = config.font || 'Arial';
    const color = config.color || '#fff';
    const textPartials = config.textPartials || '';

    return new Text(x, y, width, height, text, font, color, textPartials);
  }

  static group(config) {
    const x = config.x || 0;
    const y = config.y || 0;
    const width = config.width || 0;
    const height = config.height || 0;

    return new Group(x, y, width, height);
  }
}

export default Fastvas;

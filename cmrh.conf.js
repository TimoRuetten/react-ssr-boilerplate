import path from 'path';
import sass from 'node-sass';

module.exports = {
  generateScopedName: '[hash:8]',
  extensions: [
    '.scss',
    '.css',
  ],
  preprocessCss: data => sass.renderSync({
    data,
    includePaths: [path.resolve(__dirname, 'dist')],
  }).css,
};

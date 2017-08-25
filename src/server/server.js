/**
  Init the Express server and configure it
*/
import express from 'express';
import fs from 'fs';
import helmet from 'helmet';

import renderHtml from './render';

require('css-modules-require-hook/preset');

const app = express();

// basic security with helmet middleware
app.use(helmet());
// load bundle from dist
app.use('/main.js', (req, res) => {
  res.type('js');
  fs.createReadStream('./dist/main.js').pipe(res);
});
app.use('/main.css', (req, res) => {
  res.type('css');
  fs.createReadStream('./dist/main.css').pipe(res);
});
// setup static files for public dir
app.use(express.static('public'));
// on this url we will render the HTML
app.get('*', renderHtml);

app.listen(process.env.PORT || 3000);
export default app;

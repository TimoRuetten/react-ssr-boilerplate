/**
  Init the Express server and configure it
*/
import express from 'express';
import fs from 'fs';

import renderHtml from './render';

const app = express();

// load bundle from dist
app.use('/bundle.js', (req, res) => {
  res.type('js');
  fs.createReadStream('./dist/bundle.js').pipe(res);
});
// setup static files for public dir
app.use(express.static('public'));
// on this url we will render the HTML
app.get('*', renderHtml);

app.listen(process.env.PORT || 3000);
export default app;

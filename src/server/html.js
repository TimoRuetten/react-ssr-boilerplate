import pretty from 'pretty';
import serialize from 'serialize-javascript';

function HTML({
  htmlAttributes = '',
  headHtml = '',
  bodyAttributes = '',
  appHtml = '',
  prettify,
  payload = {},
}) {
  return `
    <html${` ${htmlAttributes}`}>
      <head>
        ${prettify ? pretty(headHtml) : headHtml}
        <link rel="stylesheet" href="/main.css">
      </head>
      <body${` ${bodyAttributes}`}>
        <div id="app">${prettify ? pretty(appHtml) : appHtml}</div>
        <script>
        ${Object
          .keys(payload)
          .map((store) =>
          `window.${store}=${serialize(payload[store], { isJSON: true, space: 0 })}`)
          .join(';')}
        </script>
        <script src="/main.js"></script>
      </body>
    </html>
  `;
}

export default HTML;

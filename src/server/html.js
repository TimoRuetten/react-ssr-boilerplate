import pretty from 'pretty';

function HTML({
  htmlAttributes = '',
  headHtml = '',
  bodyAttributes = '',
  appHtml = '',
  prettify,
}) {
  return `
    <html${` ${htmlAttributes}`}>
      <head>
        ${prettify ? pretty(headHtml) : headHtml}
        <link rel="stylesheet" href="/main.css">
      </head>
      <body${` ${bodyAttributes}`}>
        <div id="app">${prettify ? pretty(appHtml) : appHtml}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `;
}

export default HTML;


function HTML({ appHtml }) {
  return `
    <html>
      <head>
        <link rel="stylesheet" href="/main.css">
      </head>
      <body>
        <div id="app">${appHtml}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `;
}

export default HTML;

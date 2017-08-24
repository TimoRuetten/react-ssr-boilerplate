
function HTML({ appHtml }) {
  return `
    <html>
      <head>
      </head>
      <body>
        <div id="app">${appHtml}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
}

export default HTML;

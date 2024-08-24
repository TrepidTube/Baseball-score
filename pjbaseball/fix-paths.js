const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'dist/pjbaseball/browser/controller/index.html');

fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  // Ajusta las rutas según sea necesario
  const result = data.replace(/href="styles-QNO2N52W.css"/g, 'href="../styles-QNO2N52W.css"')
                     .replace(/src="polyfills-SCHOHYNV.js"/g, 'src="../polyfills-SCHOHYNV.js"')
                     .replace(/src="main-EQKSDLYT.js"/g, 'src="../main-EQKSDLYT.js"');

  fs.writeFile(filePath, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
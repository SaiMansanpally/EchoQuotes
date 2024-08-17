const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Define your input and output paths
const inputPath = path.join(__dirname, 'views', 'index.ejs');
const outputPath = path.join(__dirname, 'public', 'index.html');

// Render EJS to HTML
ejs.renderFile(inputPath, {}, (err, str) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFileSync(outputPath, str);
});

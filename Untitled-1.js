const fs = require("fs");
const path = require("path");

let outputContent = "";

const allFiles = fs.readdirSync(__dirname);

const textFiles = allFiles.filter((fileName) => path.extname(fileName) === ".txt");

textFiles.forEach((currentFile, fileIndex) => {
  const linesToInclude = fileIndex + 1;
  const fullPath = path.join(__dirname, currentFile);

  const fileData = fs.readFileSync(fullPath, "utf8");
  const fileLines = fileData.split("\n");

  for (let lineIndex = 0; lineIndex < linesToInclude && lineIndex < fileLines.length; lineIndex++) {
    outputContent += fileLines[lineIndex] + "\n";
  }
});

fs.writeFileSync("output.txt", outputContent);
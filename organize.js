const fs = require("fs");
const path = require("path");

function findJavaScriptFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // If it's a directory, recurse into it
      findJavaScriptFiles(filePath, fileList);
    } else if (path.extname(file) === ".js") {
      // If it's a JavaScript file, add it to the list
      fileList.push(filePath);
    }
  });

  return fileList;
}

function extractCommentAndCode(inputString) {
  const regex = /\/\*\*([\s\S]*?)\)\s*\{/g;
  let match;
  const results = [];

  while ((match = regex.exec(inputString)) !== null) {
    results.push(match[0].slice(0, match[0].length - 2));
  }

  return results;
}

function readJavaScriptFile(fileList) {
  let markdownContent = "# READ ME\n\n";

  fileList.forEach((file) => {
    const fileContent = fs.readFileSync(file, "utf8");
    const fileName = path.basename(file);

    const codeList = extractCommentAndCode(fileContent);

    markdownContent += "node version : nodejs version : 18.20.3\n\n";
    markdownContent += `## ${fileName}\n\n`;
    for (const codeItem of codeList) {
      markdownContent += "```javascript\n";
      markdownContent += `${codeItem}\n`;
      markdownContent += "```\n\n";
    }
  });

  fs.writeFileSync("package/README.MD", markdownContent, "utf8");
  console.log(`Markdown file "README.MD" created successfully.`);
}

const main = () => {
  const fileList = findJavaScriptFiles("./package");
  readJavaScriptFile(fileList);
};

main();

import fs from "fs-extra";
import { markdown } from "./utils/markdown.js"; // provides the "readFile" function to asynchronously read the "index.md"

(async function convertMarkdownToHtml() {
  console.log("Converting...."); // Markdown source

  const content = await fs.readFile("./content/index.md", "utf8"); // Render to HTML

  const rendered = await markdown.render(content);
  const htmlFile = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <title>Convert Markdown to HTML with Node.js</title>
    <link rel="stylesheet" href="./default.css">
    </head>
    <body>
    ${rendered}
    </body>
    </html>`; //Use highlight.js to programmatically create a public folder

  await fs.mkdirs("./public");
  await fs.writeFile("./public/index.html", htmlFile, "utf8");
  await fs.copy("./node_modules/highlight.js/styles/default.css", "./public/default.css", {
    overwrite: true
  });
  console.log("HTML completed.");
})();
//# sourceMappingURL=index.js.map
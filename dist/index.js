import fs from "fs-extra"; // provides the "readFile" function to asynchronously read the "index.md"

(async function convertMarkdownToHtml() {
  console.log("Converting...."); // Markdown source

  const content = await fs.readFile("./content/index.md", "utf8");
})();
//# sourceMappingURL=index.js.map
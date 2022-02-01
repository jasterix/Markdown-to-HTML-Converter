import fs from "fs-extra";
import { markdown } from "./utils/markdown.js"; // provides the "readFile" function to asynchronously read the "index.md"

(async function convertMarkdownToHtml() {
  console.log("Converting...."); // Markdown source

  const content = await fs.readFile("./content/index.md", "utf8"); // Render to HTML

  const rendered = await markdown.render(content);
  console.log(rendered);
})();
//# sourceMappingURL=index.js.map
import MarkdownIt from "markdown-it";
import hljs from "highlight.js"; // Add Code Syntax Highlighting With highlight.js

//configure the markdown parser options
// markdown-it package will be imported and the markdown parser object will be constructed and exported
const markdown:MarkdownIt = MarkdownIt({
    html: true, // support HTML tags in the markdown source
    highlight: function (str, lang){
        if (lang && hljs.getLanguage(lang)){ //apply syntax highlighting to designated code blocks. Ddetermine the language syntax highlighting based on the "lang" variable valuable
            try {
                return (
                    '<pre><code class="hljs">'+
                    hljs.highlight(str, {language:lang, ignoreIllegals:true}).value + //ignore errors when encountering inconsistent syntax
                    "</code></pre>"
                );
            } catch (__){}
        }
        return (
            '<pre><code class="hljs">' +
            markdown.utils.escapeHtml(str)+ // if cannot determine language of codeblock, apply escapeHtml, wrap in code element inside pre
            "</code></pre>"
        );
    },
});

export{markdown}
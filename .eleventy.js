const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
  // Copy CSS to output
  eleventyConfig.addPassthroughCopy("src/styles.css");
  // Copy images to output
  eleventyConfig.addPassthroughCopy("src/images");
  // Set default template engine
  eleventyConfig.setTemplateFormats(["html", "md", "liquid"]);

  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  };

  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);

  eleventyConfig.setLibrary('md', markdownLib);

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    // Explicitly set Liquid as the template engine
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};

const { Date } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return Date.fromJSDate(dateObj).toLocaleString(Date.DATE_MED);
  });

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("/all-articles/**/*.md");
  });

  return {
    dir: {
      input: "html",
    },
  };
};

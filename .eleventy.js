const { Date } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("all-articles");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return Date.fromJSDate(dateObj).toLocaleString(Date.DATE_MED);
  });
});
  return {
    dir: {
      input: "html",
    },
  };
};

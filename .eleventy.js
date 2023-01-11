const { Date } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("all-articles");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return Date.fromJSDate(dateObj).toLocaleString(Date.DATE_MED);
  });
  eleventyConfig.addCollection("specialCollection", function (collection) {
  return collection.getAll().filter((post) => post.data.tags);
});
  return {
    dir: {
      input: "html",
    },
  };
};

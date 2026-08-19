module.exports = function (eleventyConfig) {
    //copy directories
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/script");

    //dirs
    return {
        dir: {
            input: "src",
            output: "public"
        },
    };
};
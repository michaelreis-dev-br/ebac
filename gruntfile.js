module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "src/dev/styles/css.css": "src/dev/styles/css.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "src/prod/styles/styles.min.css": "src/dev/styles/css.less",
        },
      },
    },
    uglify: {
      target: {
        files: {
          "src/prod/scripts/scripts.min.js": "src/dev/scripts/scripts.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["less", "uglify"]);
};

const {src , dest} = require ('gulp');
const htmlPlugin = require('gulp-htmlmin');
const concat = require('gulp-concat')


function defaultTask() {
    return src('src/*.html')
    .pipe(htmlPlugin({collapseWhitespace: true, removeComments: true}))
    .pipe(dest('dist'));
  }
  exports.html = defaultTask


  const cssMin = require('gulp-css')
  function cssMinfy() {
    return src("src/css/**/*.css").pipe(concat("style.css"))
    .pipe(cssMin()).pipe(dest("dist/css"))
  }
  exports.css = cssMinfy;

  const jsMin = require('gulp-terser')
  function jsMinfy() {
    return src("src/js/*.js").pipe(concat("script.js"))
    .pipe(jsMin()).pipe(dest("dist/js"))
  }
  exports.js = jsMinfy;

  const imgMin = require('gulp-imagemin')
  function imgMinfy() {
    return src("src/images/*")
    .pipe(imgMin()).pipe(dest("dist/images"))
  }
  exports.img = imgMinfy;
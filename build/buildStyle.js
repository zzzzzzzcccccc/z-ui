const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const config = require('../config')

// 编译less
gulp.task('css', function () {
  gulp.src(config.buildLibStyle.source)
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(rename(config.buildLibStyle.filename))
    .pipe(gulp.dest(config.buildLibStyle.output));
});

// 拷贝字体文件
gulp.task('fonts', function () {
  gulp.src(config.buildLibStyle.sourceFonts)
    .pipe(gulp.dest(config.buildLibStyle.outputFonts));
});

gulp.task('default', ['css', 'fonts']);

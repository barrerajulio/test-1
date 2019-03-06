const gulp = require('gulp');
const sass = require('gulp-sass');

const scss = () => {
    return gulp.src('./style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
};

exports.default = scss;

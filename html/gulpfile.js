const scss = require('./tasks/scss.task');
const gulp = require('gulp');

const defaultTask = (cb) => {
    cb();
};

exports.default = gulp.series(defaultTask, scss.default);

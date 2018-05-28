var fs = require('fs');
var browserify = require('browserify');
var gulp = require('gulp');
gulp.task('default',function() {
    browserify().add('js/index.js').bundle().pipe(fs.createWriteStream('js/main.js'));
})
//使用gulp压缩
var fs = require('fs');
var browserify = require('browserify');
var gulp = require('gulp');

// 获取 gulp-imagemin 模块
var imagemin = require('gulp-imagemin')

// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task('images', function () {
    // 1. 找到图片
    gulp.src('./imgs/home/*.*')
    // 2. 压缩图片
        .pipe(imagemin({
            progressive: true
        }))
    // 3. 另存图片
        .pipe(gulp.dest('dist/imgs/'))
});

gulp.task('default',function() {
    browserify().add('js/index.js').bundle().pipe(fs.createWriteStream('js/main.js'));
})
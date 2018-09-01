// 使用grunt压缩
module.exports = function (grunt) {
    grunt.initConfig({
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
                files: [{
                    expand: true,
                    cwd: 'imgs/',   // 图片在imagemin目录下
                    src: ['**/*.{png,jpg,jpeg}'], // 优化 imagemin 目录下所有 png/jpg/jpeg 图片
                    dest: 'dist/imgs22/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }]
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);
};
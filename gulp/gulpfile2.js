const gulp = require('gulp');
const {series,parallel} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
var pipe = require('readable-stream').pipeline;
var sass =  require('gulp-sass');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');


//创建gulp任务
//第一个参数为任务的名称
//第二哥参数为任务所依赖的其他任务
//第三个参数是执行任务所要运行的代码
gulp.task('copy-index',function(cb){
   //取到指定的文件
    gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
    cb();
});

gulp.task('copy-html',function(cb){
  gulp.src('./src/html/*.html')
  .pipe(gulp.dest('./dist/html'))
  cb();
})

gulp.task('copy-vendor',function(cb){
  gulp.src('./src/vendor/**/*.*')
  .pipe(gulp.dest('./dist/vendor'))
  cb();
})

gulp.task('copy-assets',function(cb){
  gulp.src('./assets/**/*.*')
  .pipe(gulp.dest('./dist'))
  cb();
})

// exports.build = series(copy-index,copy-html,copy-vendor,copy-assets);
// gulp.task('copy',['copy-index','copy-html','copy-vendor','copy-assets'])
//将所有的js代码合成到一个文件中
gulp.task('concat',function(){
    return gulp.src('./src/script/**/*.js')
        .pipe(concat('output.js'))
        .pipe(gulp.dest('./dist/js')) //保留未压缩文件作为开发文件
        .pipe(uglify())
        .pipe(rename('output.min.js'))
        .pipe(gulp.dest('./dist/js'));
})

gulp.task('sass',function(cd){
  gulp.src('./src/style/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./dist/css'))
  .pipe(minify())
  .pipe(rename(function(filename){
    filename.basename += '.min';
  }))
  .pipe(gulp.dest('./dist/class'))
  cd();
})

//gulp监听watch
gulp.task('watch',function(cb){
  gulp.watch('./src/index.html',['copy-index']);
  gulp.watch('./src/html/**/*.html',['copy-html']);
  gulp.watch('./src/script/**/*.js',['concat']);
  gulp.watch('./src/style/**/*.scss',['sass']);
  cb();
})

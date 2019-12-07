const gulp = require('gulp');
const {series,parallel} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
var pipe = require('readable-stream').pipeline;
var sass =  require('gulp-sass');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber'); //水管工 守护程序


//创建gulp任务
//第一个参数为任务的名称
//第二哥参数为任务所依赖的其他任务
//第三个参数是执行任务所要运行的代码
function copy_index(cb){
   //取到指定的文件
    gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
    cb();
}

function copy_html(cb){
  gulp.src('./src/html/*.html')
  .pipe(gulp.dest('./dist/html'))
  cb();
}

function copy_vendor(cb){
  gulp.src('./src/vendor/**/*.*')
  .pipe(gulp.dest('./dist/vendor'))
  cb();
}

function copy_assets(cb){
  gulp.src('./assets/**/*.*')
  .pipe(gulp.dest('./dist'))
  cb();
}

// exports.build = series(copy-index,copy-html,copy-vendor,copy-assets);
// gulp.task('copy',['copy-index','copy-html','copy-vendor','copy-assets'])
//将所有的js代码合成到一个文件中
function concat2(cb){
    gulp.src('./src/script/**/*.js')
        .pipe(concat('output.js'))
        .pipe(gulp.dest('./dist/js')) //保留未压缩文件作为开发文件
        .pipe(uglify())
        .pipe(rename('output.min.js'))
        .pipe(gulp.dest('./dist/js'));
        cb();
}

function sass2(cb){
  gulp.src('./src/style/**/*.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(gulp.dest('./dist/css'))
  .pipe(minify())
  .pipe(rename(function(filename){
    filename.basename += '.min';
  }))
  .pipe(gulp.dest('./dist/class'))
  cb();
}

//热更新函数
function myserver(cb){
  connect.server({
    root:'./dist',
    livereload:true
  })
  cb();
}

gulp.task('server',function watch(cb){
  connect.server({
    root:'./dist',
    livereload:true
  })
  cb();
})

function reload(cb){
  gulp.src('./dist/**/*.html')
  .pipe(connect.reload());
  cb();
}

//gulp监听watch,只能监听函数
function mywatch(cb){
  gulp.watch('./src/index.html',copy_index);
  gulp.watch('./src/html/**/*.html',copy_html);
  gulp.watch('./src/script/**/*.js',concat2);
  gulp.watch('./src/style/**/*.scss',sass2);
  gulp.watch('./dist/**/*.*',reload);
  cb();
}

// gulp.task('default',series(mywatch,myserver),function(){});

var browserSync = require('browser-sync').create();

gulp.task('browser_server',function(cb){
  browserSync.init({
    server:{
      baseDir:"./"
    }
  })
  cb();
})

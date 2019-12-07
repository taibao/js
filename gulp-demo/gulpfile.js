'use strict'
/*
 1. LESS编译压缩合并
 2. js合并，压缩，混淆
 3. img复制
 4. html压缩
*/
//在gulpfile中先载入gulp包，因为这个包提供了一些api
const gulp = require('gulp');
const {series,parallel} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pipe = require('readable-stream').pipeline;
const less =  require('gulp-less');
const minify = require('gulp-minify-css');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber'); //水管工 守护程序
//使用browser-sync 来创建服务器
var browserSync = require('browser-sync');
//1.less 编译压缩 合并
function style(){
  //执行style任务时自动执行
  gulp.src(['src/style/**/*.*','!src/style/**/_*.*'])
  .pipe(plumber())
  .pipe(less())
  .pipe(cssnano())
  .pipe(gulp.dest('dist/styles'))
  .pipe(browserSync.reload({stream:true}));
}

//js压缩合并，混淆
function script(){
  gulp.src('./src/script/*.js')
  .pipe(plumber())
  .pipe(concat('common.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
  .pipe(rename(function(filename){
    filename.basename +='.min';
  }))
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.reload({stream:true}));
}

///3.图片复制
function image(){
  gulp.src('src/images/*.*')
  .pipe(plumber())
  .pipe(gulp.dest('dist/images'))
  .pipe(browserSync.reload({stream:true}));
  cb();
}

///4.html处理 压缩
function html(){
  gulp.src('src/*.html')
  .pipe(plumber())
  .pipe(htmlmin({
    collapseWhitespace:true, //删除空格
    removeComments:true, //去除注释
    removeAttributeQuotes:true,
  }))
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.reload({stream:true}));
}

gulp.task('browser_server',function(cb){
  browserSync({
    server:{
      baseDir:['dist']
    },function(err,bs){
      console.log(bs.options.getIn(["urls","local"]));
    }
  })

  //当style下内容发生变化时，执行style任务
  gulp.watch(['src/style/**/*.*'],style);
  gulp.watch(['src/script/**/*.js'],script);
  gulp.watch(['src/images/**/*.*'],image);
  gulp.watch(['src/**/*.html'],html);

  cb();
})

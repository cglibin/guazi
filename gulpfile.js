var gulp = require("gulp"); //npm install gulp --save-dev
var connect = require("gulp-connect");  //npm install gulp-connect --save-dev
var less = require("gulp-less"); //npm install gulp-less --save-dev

gulp.task("html",function () {
    gulp.src("./src/*.html")
        .pipe(connect.reload())
        .pipe(gulp.dest("./dist"));
});
gulp.task("less",function () {
    gulp.src("./src/less/*.less")
        .pipe(connect.reload())
        .pipe(less())
        .pipe(gulp.dest("./dist/css"));
});
gulp.task("js",function () {
    gulp.src("./src/js/*.js")
        .pipe(connect.reload())
        .pipe(gulp.dest("./dist/js"));
});
gulp.task("watch",function () {
    gulp.watch("./src/index.html",["html"])
    gulp.watch("./src/less/*.less",["less"])
    gulp.watch("./src/js/*.js",["js"])
});
gulp.task("server",function () {
    connect.server({
        root : "dist",
        port : "8090", 
        livereload : true
    })
});
gulp.task("default",["html","less","js","watch","server"]);
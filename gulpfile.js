var gulp = require('gulp');
var mocha = require('gulp-mocha');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var babel = require('babel-register');
//var sourcemaps = require('gulp-sourcemaps');

var gulp_src = gulp.src;
gulp.src = function() {
    return gulp_src.apply(gulp, arguments)
        .pipe(plumber(function(error) {
                // Output an error message
                gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
                // emit the end event, to properly end the task
                this.emit('end');
            })
        );
};

gulp.task('test', function() {
    var error = false;
    gulp.src('./spec/**/*.js')
        //.pipe(sourcemaps.init())
        .pipe(mocha({compilers:babel}))
        //.pipe(sourcemaps.write())
        .on('error', function() {
            console.log('Tests failed!');
            error = true;
        })
        .on('end', function() {
            if (!error) {
                console.log('Tests succeeded! ');
            }
        });
});

gulp.task('watch', ['test'],  function() {
    gulp.watch(['./spec/**/*.js', './*.js', 'components/**/*.js', 'states/**/*.js'], ['test']);
});
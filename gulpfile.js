/*GULP:
Gulp is a node package that concatenates your files. It basically can convert a whole bunch of files (i.e., your whole js tree structure) into just ONE, minified file. At the time of writing, that reduces the js payload from 22kb to just 7kb. 
More importantly, it also means our user's browser only needs to fetch ONE file (all.min.js), instead of... however many i create. 
*/


// First, we'll just include gulp itself.
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var shinycss = require('gulp-clean-css');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile & minify sass
gulp.task('sass', function() {
    return gulp.src(['build/scss/*.scss','build/scss/**/*.scss'])
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(shinycss())
        .pipe(gulp.dest('public/css'));
});

// Concatenate & minify JS
gulp.task('scripts', function() {
    return gulp.src(['build/js/data/*.js','build/js/controllers/*.js','build/js/factories/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('public/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['build/js/**/*.js','build/js/*.js'], ['lint', 'scripts']);
    gulp.watch(['build/scss/*.scss','build/scss/**/*.scss'], ['sass']);
});

//no watchin!
gulp.task('render',['lint','sass','scripts'])

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);

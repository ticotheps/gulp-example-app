const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/* 
    --Top Level Functions--
    gulp.task - Define Tasks
    gulp.src - Points to files to use
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes
*/

// Logs message, runs with 'gulp message' command
gulp.task('message', function(){
    return console.log('Gulp is running...');
});

// Copy ALL HTML files with 'gulp copyHtml' command
gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist')); // <- output folder does not have to be called 'dist'
});

// Optimize Images
gulp.task('imageMin', () =>
    gulp.src('src/images/*') // <- Optimizes all images in the 'src/images' folder; you must create an 'images' folder in 'src' folder
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images')) // <- don't have to create the 'dist/images' folder, gulp will do this for you
);

// Minify JS
gulp.task('minify', function(){
    gulp.src('src/js/*') // <- selects ANY .js file
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')); // <- gulp will create a 'dist/js' file for you
});

// Compile Sass
gulp.task('sass', function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Scripts
gulp.task('scripts', function(){
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function(){
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/js/*', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/js/*.html', ['copyHtml']);
});

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

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
gulp.task('', () =>
    gulp.src('src/images/*') // <- Optimizes all images in the 'src/images' folder; you must create an 'images' folder in 'src' folder
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images')) // <- don't have to create the 'dist/images' folder, gulp will do this for you
);

// Create a default task to run with the 'gulp' command
gulp.task('default', function(){
    return console.log('Gulp is running...');
});
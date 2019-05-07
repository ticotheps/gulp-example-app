const gulp = require('gulp');

/* 
    --Top Level Functions--
    gulp.task - Define Tasks
    gulp.src - Points to files to use
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes
*/

// Logs message
gulp.task('message', function(){
    return console.log('Gulp is running...');
});
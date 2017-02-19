var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/*.html', function () {
        browserSync.reload(); // Recargar la página cada vez que se guarden cambios en index.html
    });

    watch('./app/pre-styles/**/*.css', function () {
        gulp.start('cssInject'); // A través de cssInject se aplica el procesamiento de PostCSS
    });
});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(browserSync.stream());
});
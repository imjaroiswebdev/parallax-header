var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');

gulp.task('styles', function () { // Esta tarea se usará para pre procesamiento de CSS escrito en PostCSS.
    return gulp.src('./app/pre-styles/styles.css')
        .pipe(postcss([cssImport,
                       mixins,
                       cssvars,
                       nested,
                       autoprefixer]))
        .on('error', function (errorInfo) { // Fallback function para manejo de errores de esta tarea y evitar que watch se detenga
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/assets/styles/'));
});

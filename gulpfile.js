const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('babel', () =>
    gulp.src('./src/js/babel/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./src/js/'))
);

gulp.task('sass', function(done) {
    gulp.src("src/css/*.scss") // путь к sass файлам
        .pipe(plumber())    
        .pipe(sass())
        .pipe(gulp.dest("src/css/")) //папка для выгрузки css файлов
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function (done) {

    browserSync.init({
        server: {
            baseDir: "src/"
        },
        files: ['src/html/*.html', 'src/css/*.css', 'src/js/*.js']
    });

    gulp.watch("src/css/*.scss", gulp.series('sass'));
    gulp.watch("src/js/babel/*.js", gulp.series('babel'));
    gulp.watch("src/*.html").on('change', () => {
        browserSync.reload();
        done();
    });


    done();
});

gulp.task('default', gulp.series('babel', 'serve'));
/**
 * @file gulpfile
 * @author cgzero(cgzero@cgzero.com)
 */

const gulp = require('gulp');
const babel = require('gulp-babel');
const babelHelpers = require('gulp-babel-external-helpers');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const removeLines = require('gulp-remove-lines');
const nib = require('nib');

gulp.task('babel', function () {
    return gulp.src('src/**/*.js')
        // 去除 js 中嵌入的 css
        .pipe(removeLines({'filters': [
            /import '[\S]+\.styl'/
        ]}))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(babelHelpers('babelHelpers.js', 'umd'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lib'));
});

gulp.task('stylus', function () {
    return gulp.src('src/**/*.styl')
        .pipe(stylus({
            'resolve url': true,
            define: {
                url: require('stylus').resolver()
            },
            use: nib(),
            import: ['nib']
            // compress: true
        }))
        .pipe(gulp.dest('lib'));
});

gulp.task('font', function () {
    return gulp.src('src/icon/font/*').pipe(gulp.dest('lib/icon/font'));
});

gulp.task('build', ['babel', 'stylus', 'font']);
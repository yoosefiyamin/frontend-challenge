const browserify = require('browserify'),
    gulp = require("gulp"),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    streamify = require('gulp-streamify'),
    source = require('vinyl-source-stream'),
    concat = require('gulp-concat'),
    browsersync = require('browser-sync').create(),
    htmlmin = require('gulp-htmlmin'),
    stringify = require('stringify');

function html() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream());
}

function css() {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream());
}

function js() {
    return browserify({ entries: 'src/main.js' })
        .transform(stringify(['.html']))
        .bundle()
        .on("error", function (err) { console.log(err) })
        .pipe(source('app.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream());
};

function watchFiles() {
    gulp.watch('src/**/*.scss', css);
    gulp.watch('src/**/*.html', html);
    gulp.watch('src/**/*.js', js);
}

// BrowserSync
function sync() {
    browsersync.init({
        server: {
            baseDir: "./dist",
            index: "/index.html",
        },
        port: 3001,
        ui: false
    });
}

// define complex tasks
//const js = gulp.series(scripts, html);
const build = gulp.parallel(css, js, html);
const watch = gulp.series(build, gulp.parallel(watchFiles, sync));

exports.default = watch;
exports.build = build;
exports.watch = watch;
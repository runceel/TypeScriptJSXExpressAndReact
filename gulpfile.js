var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build', ['serverBuild', 'clientBuild']);

gulp.task('serverBuild', function() {
    var project = ts.createProject('./server/tsconfig.json');
    return gulp.src('./server/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(project))
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./server'));
});

gulp.task('clientBuild', ['browserify']);

gulp.task('browserify', ['tsc'], function() {
    return browserify({ entries: ['./client/app.js']}, { debug: true })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./server/public/scripts'))
});

gulp.task('tsc', function() {
    var project = ts.createProject('./client/tsconfig.json');
    return gulp.src('./client/**/*.{ts,tsx}')
        .pipe(sourcemaps.init())
        .pipe(ts(project))
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./client'));
});
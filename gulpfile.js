var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var webpack = require('gulp-webpack');

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

gulp.task('clientBuild', function() {
    var config = require('./webpack.config.js');
    return gulp.src('./client/app.tsx')
        .pipe(webpack(config))
        .pipe(gulp.dest('./server/public/scripts'));
});

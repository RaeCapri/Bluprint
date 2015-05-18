var gulp = require('gulp'),
		concat = require('gulp-concat'),
		rename = require('gulp-rename'),
		sass = require('gulp-sass'),
		uglify = require('gulp-uglify'),
		browserSync = require('browser-sync').create(),
		reload = browserSync;

//BrowserSync for starting server
gulp.task('browserSync', function () {
	//files to keep a close watch on
	var files = [
	'./css/style.css',
	'./sass/**/*.scss',
	'./*.php'
	];

	//Initializing BrowserSync with virtual host
	browserSync.init(files, {
		proxy: '<add vhost/domain host here>',
		notify: false
	});
});

gulp.task('sass', function () {
	gulp.src('sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('watch', function () {
	gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch', 'sass', 'browserSync']);
/*
 * Standard
 *
 * Copyright (c) 2020-2021 by Marc Anton Dahmen
 * https://marcdahmen.de
 *
 * MIT license
 */

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const beep = require('beepbeep');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const header = require('gulp-header');
const merge2 = require('merge2');
const less = require('gulp-less');
const log = require('fancy-log');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const cleanCSSOptions = {
	format: { wrapAt: 500 },
	rebase: false,
};

// Error handling to prevent watch task to fail silently without restarting.
const onError = function (err) {
	log.error(err);
	beep();
	this.emit('end');
};

// Concat minify and prefix all required js files.
gulp.task('standard-js', function () {
	var uglifyOptions = {
			compress: {
				hoist_funs: false,
				hoist_vars: false,
			},
			output: {
				comments: /(license|copyright)/i,
				max_line_len: 500,
			},
		},
		pkgUIkit = require('./node_modules/uikit/package.json');

	return merge2(
		gulp.src([
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
		]),
		gulp
			.src([
				// Core.
				// Order of files taken from lib/vendor/uikit/gulpfile.js
				'node_modules/uikit/src/js/core/core.js',
				'node_modules/uikit/src/js/core/touch.js',
				'node_modules/uikit/src/js/core/utility.js',
				'node_modules/uikit/src/js/core/dropdown.js',
				'node_modules/uikit/src/js/core/grid.js',
				'node_modules/uikit/src/js/core/modal.js',
				'node_modules/uikit/src/js/core/nav.js',
				// Selected components.
				'node_modules/uikit/src/js/components/autocomplete.js',
				'node_modules/uikit/src/js/components/lightbox.js',
				'node_modules/uikit/src/js/components/pagination.js',
				'node_modules/uikit/src/js/components/slider.js',
				'node_modules/uikit/src/js/components/slideshow.js',
			])
			.pipe(uglify(uglifyOptions))
			.pipe(concat('uikit.js', { newLine: '\r\n\r\n' })) // Doesn't get saved to disk.
			.pipe(
				header(
					'/*! <%= pkg.title %> <%= pkg.version %> | <%= pkg.homepage %> | (c) 2014 YOOtheme | MIT License */\n',
					{ pkg: pkgUIkit },
				),
			),
		// Sticky sidebar.
		gulp
			.src(['node_modules/css-element-queries/src/ResizeSensor.js'])
			.pipe(uglify(uglifyOptions)),
		gulp.src(['node_modules/sticky-sidebar/dist/sticky-sidebar.min.js']),
		gulp.src(['js/*.js']).pipe(uglify(uglifyOptions)),
	)
		.pipe(concat('standard.min.js', { newLine: '\r\n\r\n' }))
		.pipe(gulp.dest('dist'));
});

// Compile, minify and prefix standard.less.
gulp.task('standard-less', function () {
	return gulp
		.src('less/standard.less')
		.pipe(less())
		.on('error', onError)
		.pipe(autoprefixer({ grid: false }))
		.pipe(cleanCSS(cleanCSSOptions))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('dist'));
});

// Fonts.
gulp.task('fonts', function () {
	return gulp
		.src('node_modules/typeface-inter/Inter Web/Inter-*.var.woff2')
		.pipe(
			rename((path) => {
				path.basename = path.basename.replace('.var', '-var');
			}),
		)
		.pipe(gulp.dest('dist'));
});

// Watch task.
gulp.task('watch', function () {
	gulp.watch('less/*.less', gulp.series('standard-less'));
	gulp.watch('js/*.js', gulp.series('standard-js'));
});

// The default task.
gulp.task('default', gulp.series('standard-js', 'standard-less', 'fonts'));

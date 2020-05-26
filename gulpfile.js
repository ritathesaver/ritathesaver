var gulp = require('gulp');
var postcss = require('gulp-postcss');
var pixelstorem = require('postcss-pixels-to-rem');

gulp.task('css', function() {
	var plugins = [ pixelstorem() ];
	gulp.src('./styles.css').pipe(postcss(plugins)).pipe(gulp.dest('public'));
});

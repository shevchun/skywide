import gulp from 'gulp';
import options from '../../options.json' assert { type: "json" };
import paths from '../paths.js';
import html from './html.js'
import css from './scss.js'
import images from './images.js'
import livereload from './livereload.js'
import scripts from './scripts.js'
import filesMenu from './markup-menu.js'
import staticImages from './static.js'
import fonts from './fonts.js'


gulp.task('watch', () => {
  gulp.watch(`${paths.baseSrc}/**/*.html`, gulp.series(html));
  gulp.watch(`${paths.src.styles}/**/*.{scss,css}`, gulp.series(css));
  gulp.watch(`${paths.src.static}/**/*.{png,jpg,gif,svg,mp4,webm,mp3}`, gulp.series(staticImages));
  gulp.watch(`${paths.src.images}/**/*.{png,jpg,gif,svg}`, gulp.series(images));
  gulp.watch([`${paths.baseSrc}/*.${options.templateEngine}`], gulp.series(filesMenu));
  gulp.watch(`${paths.src.scripts}/**/*.js`, gulp.series(scripts));
  gulp.watch(`${paths.src.fonts}/**/*`, gulp.series(fonts));
})

gulp.task('default', gulp.series(
  html, css, staticImages, images, filesMenu, scripts, fonts,
  gulp.parallel('watch', livereload)
))
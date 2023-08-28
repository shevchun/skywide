import gulp from 'gulp';
import html from './html.js'
import css from './scss.js'
import images from './images.js'
import scripts from './scripts.js'
import filesMenu from './markup-menu.js'
import staticImages from './static.js'
import fonts from './fonts.js'

gulp.task('build', gulp.series(
  html, css, staticImages, images, filesMenu, scripts, fonts
))

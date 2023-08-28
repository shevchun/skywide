import gulp from 'gulp';
import gulpif from 'gulp-if';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import cached from 'gulp-cached';
import errorHandler from '../utils/errorHandler.js';
import paths from '../paths.js';
import nunjucksRender from 'gulp-nunjucks-render';
import changed from 'gulp-changed';
import filter from 'gulp-filter';

const { src } = gulp;

export default function html() {
  return src(`${paths.baseSrc}/**/*.html`)
      .pipe(plumber({
        errorHandler
      }))
      .pipe(
        nunjucksRender({
          path: paths.src.includes
        }))
      .pipe(changed(`${paths.baseSrc}/**/`, {
        extension: '.html'
      }))
      .pipe(gulpif(global.watch, cached('html')))
      .pipe(filter((file) => !/(\/_|\\_)/.test(file.path) || !/^_/.test(file.relative)))
      .pipe(gulp.dest(paths.baseDist))
      .pipe(browserSync.stream())
}

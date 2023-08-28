import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import stripCssComments from 'gulp-strip-css-comments';
import errorHandler from '../utils/errorHandler.js';
import paths from '../paths.js';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import glob from 'gulp-sass-glob';
import options from '../../options.json' assert { type: "json" };
import cleanCSS from 'gulp-clean-css';

const { src } = gulp;
const scss = gulpSass(dartSass);

export default function css() {
  return src(`${paths.src.styles}/index.scss`)
      .pipe(plumber({
        errorHandler
      }))
      .pipe(gulpif(options.env === 'dev', sourcemaps.init()))
      .pipe(glob())
      .pipe(scss()
        .on('error', scss.logError))
      .pipe(gulpif(options.env !== 'dev', stripCssComments()))
      .pipe(autoprefixer())
      .pipe(gulpif(options.env === 'dev', sourcemaps.write('.')))
      .pipe(gulpif(options.env !== 'dev', cleanCSS()))
      .pipe(gulp.dest(paths.dist.styles))
      .pipe(browserSync.stream())
}

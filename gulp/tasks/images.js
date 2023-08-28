import gulp from 'gulp';
import paths from '../paths.js';
import cached from 'gulp-cached';

const { src } = gulp;

export default function images() {
  return src(`${paths.src.images}/**/*.{png,jpg,gif,svg}`)
      .pipe(cached())
      .pipe(gulp.dest(paths.dist.images));
}

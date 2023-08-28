import gulp from 'gulp';
import paths from '../paths.js'; 
import cached from 'gulp-cached';

const { src } = gulp

export default function fonts() {
  return src(`${paths.src.fonts}/**/*`)
      .pipe(cached())
      .pipe(gulp.dest(paths.dist.fonts));
}

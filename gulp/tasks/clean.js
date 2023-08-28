import gulp from 'gulp';
import { deleteSync } from 'del';
import paths from '../paths.js';

gulp.task('clean', (done) => {
  deleteSync(`${paths.baseDist}`)
  done()
})

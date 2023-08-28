import gutil from 'gulp-util';
import webpackConfig from '../../webpack.config.cjs';
import webpack from 'webpack';
import { reload } from 'browser-sync';


export default function scripts(done) {
  return webpack(webpackConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError("webpack", err);
    }
    gutil.log("[webpack]", stats.toString({
      chunks: false,
      colors: true,
      errorDetails: true
    }));
    reload();
    done()
  });
}

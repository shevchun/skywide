import paths from '../paths.js';
import option from '../../options.json' assert { type: "json" };
import fs from 'fs';

const { templateEngine, env } = option

const options = {
  templateEngine,
  reg: templateEngine === 'html' ?  /\.(html)$/i : /\.(pug)$/i,
  path: paths.baseSrc,
  excludeReg: /^(ajax|_)/i
}

export default function filesMenu(done) {
  return fs.readdir(options.path, (err, files) => {
    const arr = [];
    const { reg, excludeReg } = options;
    for (let i = 0; i < files.length; i += 1) {
      if (excludeReg.test(files[i])) {
        continue;
      }
      if (reg.test(files[i])) {
        const fileName = files[i].replace(/\.(html|pug)$/i, '.html');
        arr.push(fileName);
      }
    }
    const file = fs.createWriteStream(`${paths.src.scripts}/files.js`);
    arr.unshift(env);
    file.write(`export default ${JSON.stringify(arr)}`);
    file.end();
    done()
  });
}

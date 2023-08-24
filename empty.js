import * as fs from "fs"
import * as path from "path"

fs.readdirSync('./public/').forEach(file => {
    const fileDir = path.join('./public/', file);
  
    if (file !== 'data.json' && file !== '_layout.html') {
      fs.unlinkSync(fileDir);
    }
  });
  
  fs.readdirSync('./precompiled/').forEach(file => {
    const fileDir = path.join('./precompiled/', file);
    console.log(fileDir);
  
    if (file !== 'lib') {
      fs.unlinkSync(fileDir);
    }
  });
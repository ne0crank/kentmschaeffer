const fs = require('fs');


const readify = (dataFile) => {
  return new Promise((resolve, reject) => {
    let isGoodFile = fs.statSync(dataFile).isFile();
    let isADir = fs.statSync(dataFile).isDirectory();
    if ( isGoodFile ) {
      fs.readFile(dataFile, (err, data) => {
        if (err) {
          if (err.code == 'ENONT') {
            reject('File Does Not Exist')
          } else {
            reject(err)
          }
          return
        }
      })
    } else if (isADir) {
      reject('Path is a Directory')
    }
    resolve(data)
  })
}

const jsonify = dataParts => {
  JSON.parse(dataParts);
}

readify(fullPath)
  .then(jsonify)
  .catch( error => console.log(error) );

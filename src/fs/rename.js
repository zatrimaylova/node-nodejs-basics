let fs = require('fs');

const rename = async () => {
    fs.access('.files/wrongFilename.txt', fs.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    })

    fs.access('./files/properFilename.md', fs.F_OK, (err) => {
        if (err) {
            return;
        } else {
            throw new Error('FS operation failed');
        }
    })
    fs.rename('./files/wrongFilename.txt', './files/properFilename.md', err => {
        if(err) throw err;
    });
};

rename();
const list = async () => {
    let fs = require('fs');
    fs.readdir('./files', (err, files) => {
        if(err) throw new Error('FS operation failed');

        console.log(files);
    });
};

list();
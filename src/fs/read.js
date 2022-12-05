const read = async () => {
    let fs = require('fs');
    fs.readFile('files/fileToRead.txt', 'utf-8', (err, data) => {
        if(err) throw new Error('FS operation failed');
        console.log(data);
    });
};

read();
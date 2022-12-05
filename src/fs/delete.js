const remove = async () => {
    let fs = require('fs');
    fs.unlink('files/fileToRemove.txt', err => {
        if (err) throw new Error('FS operation failed');
    });
};

remove();
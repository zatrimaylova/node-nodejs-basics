const fs = require('fs');

const path = './files/fresh.txt';

const create = async () => {
    fs.access(path, fs.F_OK, (err) => {
        if (err) {
            fs.writeFile(path, 'I am fresh and young', (error) => {
                error ? console.log(error) : null;
            });
            return;
        }
      
        throw new Error('FS operation failed');
    })
};

create();
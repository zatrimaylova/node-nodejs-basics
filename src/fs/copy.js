const fs = require('fs');

const folderToCopy = './files';
const copiedFolder = './files_copy';

const copy = async () => {
    fs.access(folderToCopy, fs.F_OK, (err) => {
        //if file folder does not exist
        if (err) {
            throw new Error('FS operation failed');
        }
    })

    fs.access(copiedFolder, fs.F_OK, async (err) => {
        //if files_copy folder does not exist
        if (err) {
            try {
                await fs.mkdir(copiedFolder, (err) => {
                    if(err) throw err; // не удалось создать папку
                });

                await fs.readdir(folderToCopy, (err, files) => {
                    if(err) throw err;
 
                    files.forEach(file => copyFile(file));
                });
            } catch (err) {
                console.error(err)
            }
        } else {
            throw new Error('FS operation failed');
        }
    })
};

const copyFile = (path) => {
    const { COPYFILE_EXCL } = fs.constants;
    fs.copyFile(`${folderToCopy}/${path}`, `${copiedFolder}/${path}`, COPYFILE_EXCL, err => {
        if(err) throw err;
    });
};

copy();

const sizeOf = require('image-size');
const fs = require('fs');

const year = '2019'
const folderName = 'shasta-2019';

const desktop = `F:/Pictures/${year}/${folderName}/desktop`;
const mobile = `F:/Pictures/${year}/${folderName}/mobile`;

// rename(desktop);
rename(mobile);

function rename(dir) {
    fs.readdir(dir, (err, images) => {
        images = images.filter(i => i.includes('.jpg'));

        for (let i = 0; i < images.length; i++) {
            const imageName = images[i];
            const filename = dir + '/' + imageName;

            sizeOf(filename, (err, dimensions) => {
                const suffix = `${dimensions.width}x${dimensions.height}`;

                if (!imageName.includes(suffix)) {
                    const nameWithoutExt = imageName.substring(0, imageName.length - 4);
                    const newFilename = `${nameWithoutExt}-${suffix}.jpg`;

                    fs.rename(filename, `${dir}/${newFilename}`, err => {
                        if (err) console.log(err);

                        console.log(`Renamed file (${filename}) to (${dir}/${newFilename})`);
                    });
                }
            });
        }
    })
}

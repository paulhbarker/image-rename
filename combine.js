const fs = require('fs');

const year = '2019';
const folderName = 'shasta-2019';

const bucket = 'https://s3-us-west-1.amazonaws.com/paulbphoto';

const mobileDir = `F:/Pictures/${year}/${folderName}/mobile`;
const desktopDir = `F:/Pictures/${year}/${folderName}/desktop`;

let items = [];

fs.readdir(mobileDir, (err, mobile) => {
    fs.readdir(desktopDir, (err, desktop) => {
            for (let i = 0; i < mobile.length; i++) {
                items.push({
                    mobile: `${bucket}/${folderName}/mobile/` + mobile[i],
                    desktop: `${bucket}/${folderName}/desktop/` + desktop[i]
                });
            }
            fs.writeFileSync('items.json', JSON.stringify(items, null, 4), 'utf8');
    })
})

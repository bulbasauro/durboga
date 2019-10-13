const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..','..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            //const fileName = `${name}-${Date.now()}${ext}`;
            const fileNameExt = `${name}${ext}`;
            cb(null, fileNameExt);
        }
    })
};

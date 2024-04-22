const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, String(Date.now()));
    }
});

const upload = multer({ storage: storage });

module.exports = upload;


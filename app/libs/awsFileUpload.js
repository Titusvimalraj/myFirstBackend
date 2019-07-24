// This library defines the cloud file storage
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const multer = require('multer');

let credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
AWS.config.credentials = credentials;

const s3 = new AWS.S3();

/**
 * @author Titus Vimal Raj
 * @description holds storage information
 */
let awsUpload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'real-time-todo-list-app',
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '_' + file.originalname);
        }
    })
})

module.exports = awsUpload
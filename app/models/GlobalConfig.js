const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @description This stores the sercret or information required repeatedly
 * @author Titus Vimal Raj
 */
let globalSchema = new Schema({

    secretKey: {
        type: String,
        index: true
    }
})

module.exports = mongoose.model('GlobalConfig', globalSchema);
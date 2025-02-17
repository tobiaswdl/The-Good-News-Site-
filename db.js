const mongoose = require('mongoose');

module.exports = {
    connectToDb: (cb) => {
        mongoose.connect(process.env.MONGODB_URI, {
        })
        .then(() => cb(null))
        .catch(err => cb(err));
    }
}
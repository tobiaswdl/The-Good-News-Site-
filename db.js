const mongoose = require('mongoose');

module.exports = {
  connectToDb: (cb) => {
    mongoose.connect('mongodb://localhost:27017/News')
      .then(() => cb(null))
      .catch(err => cb(err));
  }
};

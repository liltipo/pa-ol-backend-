const mongoose = require('mongoose');

const createSchema = (definition, options = {}) => {
  return new mongoose.Schema(definition, { timestamps: true, ...options });
};

module.exports = createSchema;

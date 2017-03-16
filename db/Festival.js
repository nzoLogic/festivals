let mongoose = require('mongoose')

const Schema = mongoose.Schema;

let FestivalSchema = new Schema({
  name: String,
  location: String
})

let Festival = mongoose.model('Festival', FestivalSchema)

module.exports = Festival;

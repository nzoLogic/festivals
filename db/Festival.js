let mongoose = require('mongoose')

const Schema = mongoose.Schema;

let FestivalSchema = new Schema({
  name: String,
  location: String,
  date: String
})

let Festival = mongoose.model('Festival', FestivalSchema)

module.exports = Festival;

// 1. Read in your mongoose library
const mongoose = require('mongoose');
console.log(mongoose);
// 2. Get the Schema class from mongoose
const Schema = mongoose.Schema;
// 3. Define the database model schema for your todos
const signSchema = new Schema({
  "name": String,
  "color": String,
});

// 4. create a new mongodb model called: "todos"
const db = mongoose.model('signs', signSchema)
// 5. make this todos model available to your app
module.exports = db;
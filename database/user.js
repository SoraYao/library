var  mongoose =  require('./db.js')


   let Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : { type: String },
    userpwd: {type: String},

});

module.exports = mongoose.model('User',UserSchema);

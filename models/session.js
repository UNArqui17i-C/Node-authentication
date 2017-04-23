var mongoose    =   require("mongoose");
//mongoose.connect('mongodb://mongodb:27017/MDB');
mongoose.connect('mongodb://localhost:27017/demoDb');
var mongoSchema =   mongoose.Schema;
var sessionSchema  = {
    "email" : String,
    "sessionToken" : String
};
module.exports = mongoose.model('userSession',sessionSchema);;

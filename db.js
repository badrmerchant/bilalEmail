module.exports = function(app,mongoose) {

    this.db={};
    //user model create
     // example
    /*var user = new mongoose.Schema({
        name: {type:String, unique:true},
        first_name:String
    });
    this.db.user=mongoose.model('user', user);*/

    var mail=new mongoose.Schema({
        subject: String,
        message: String
    });
    this.db.mail=mongoose.model('mail', mail);// shows mails in db collection name

};
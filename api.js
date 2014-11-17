module.exports = function(app) {

//    // creates query
//// example
//    app.get('/api/user', function(req, res) {
//        app.db.user.find(function(err,data){
//            if(err) return console.error(err);
//            console.log('get');
//            res.json(data);
//            res.end();
//        });
//    });
//    */

    app.post('/composeMail',function(req,res){

        new app.db.mail({
            subject:req.body.subject,
            message:req.body.message
        }).save(function(err,obj){
                if(err)
                    console.log(err);
                console.log(obj)
            res.end(' badar it is informed  that Data is saved  ');

            });
       // console.log(req.body);
    });
};
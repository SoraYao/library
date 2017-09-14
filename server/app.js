var express = require('express');
var app = express();
var path = require('path');
var User = require("../database/user.js");
var formidable =require('formidable');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.static(path.join(__dirname, '../app')))

app.post('/form',function(req,res,next){
    var form =new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){

        User.create({
            username : fields.username,
            userpwd: fields.password
        },function(){
            if (err) {
                res.sendStatus(400);
                console.log(err);
            } else {
                res.sendStatus(201);
                console.log("注册成功")
            }
        });


        })



    });
app.post('/login',function(req,res,next){
    var form =new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
        var username = {"username":fields.username};
        var  userpassword=fields.password;
        User.find(username, function(err,result){
            if(result.length ==0){
                console.log("该用户不存在")
                res.sendStatus(400);
                return;
            }
            var correctcode=result[0].userpwd;
            if(userpassword==correctcode){
                res.sendStatus(201)
                console.log("登陆成功")
            }else{
                res.sendStatus(400);
                console.log("密码错误")
            }


        })

        });




    });










app.listen(3000);

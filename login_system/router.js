
var express = require("express");
var router = express.Router();

const credential = {
    email:"sabrina@binar.com",
    password:"sabrina123",
}

//login user
router.post('/login', (req,res) => {
   if(req.body.email == credential.email && req.body.password==credential.password){
       req.session.user=req.body.email;
    //    res.end("Log in Successfull !")
       res.redirect('/route/dashboard');
   } else{
       res.end("invalid username or password!")
   }
});

//route untuk dashboard
router.get('/dashboard', (req,res) => {
    if(req.session.user){
        res.render('dashboard', {user:req.session.user})
    } else {
        res.send("Unauthorized User!")
    }
})
//route for logout
router.get('/logout',(req,res) => {
    req.session.destroy( function(err) {
        if(err){
            console.log(err);
            res.send("ERROR")
        } else {
            res.render('base',{title:"Express", logout:"logout success!!!!!"})
        }
    })
})

module.exports = router;
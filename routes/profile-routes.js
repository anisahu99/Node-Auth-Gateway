const router=require('express').Router();

// custom middleware
// to handle
//login/logout checking

const authCheck=(req,res,next)=>{
    if(!req.user){
        res.redirect('/auth/login');
    }
    else{
        next();
    }
}

router.get('/',authCheck,(req,res)=>{
    res.render('profile', { user: req.user });
});

module.exports=router;
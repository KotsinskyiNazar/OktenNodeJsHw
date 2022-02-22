
class SignInControllers{
    signIn(req,res){
        res.render('SignInPage')
    }
}

module.exports = new SignInControllers()
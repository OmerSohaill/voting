const jwt=require('jsonwebtoken')
const secret='umersohail';
const sercretadmin='pakistans'

function setuser(user){
    const playload={
        email:user.email,
        id:user.id
    }

   return   jwt.sign(playload,secret)
}

function getuser(token){
    if(!token )return null;
    
    return jwt.verify(token,secret)
}

function setadmin(admin){
    const playload={
        email:admin.email,
        id:admin.id
    }
    return jwt.sign(playload,sercretadmin)

}
function getadmin(admin){
    return jwt.verify(admin,sercretadmin)
}
module.exports={
    setuser,
getuser,
setadmin,
getadmin
}
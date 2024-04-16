const jwt=require('jsonwebtoken')
const secret='umersohail';

function setuser(user){
    const playload={
        email:user.email,
        id:user.id
    }

   return   setuser(playload,secret)
}

function getuser(token){
    if(!token )return null;
    
    return getuser(token,secret)
}

module.exports={
    setuser,
getuser
}
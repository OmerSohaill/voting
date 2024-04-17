const mongoose=require ("mongoose");

const login=new mongoose.Schema({
    email:{
        type:String,
    required:true
    },
    password:{
        type:String,
        required:true
    }
})

const voterregister=new mongoose.Schema({
    email:{
        type:String,
        required:true
      
       
    },
    cnic:{
        type:Number,
        required:true
       
       },
    votecast:{
        type:Boolean,
        default:false,
    }
})
const admin=new mongoose.Schema({
    email:{
        type:String,
        required:true
    
    },
    password:{
        type:String,
        required:true
    }

})

const candidate=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    party:{
        type:String,
        required:true

    },
    totalvote:{
        type:Number,
        default:0
    },
    aligible:{
        type:Boolean,
        required:true,
        default :true
        
    }
})
const logins=mongoose.model('logins',login)
    const voterinfos=mongoose.model('voterinfos', voterregister)
    const admins=mongoose.model('admins',admin)
    const candidatess=mongoose.model('candidatess',candidate)
module.exports={
    logins:logins,
    voterinfos:voterinfos,
    admins:admins,
    candidatess,candidatess
}

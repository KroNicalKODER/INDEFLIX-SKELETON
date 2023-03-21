import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    avatar:{
        type: String,
    },
    fansNum:{
        type: Number
    },
    fans:{
        type: [String]
    },
    followingNum:{
        type: Number
    },
    following:{
        type: [String],
    }

},
{
    timestamps:true
}
)

export default mongoose.model("user",UserSchema);
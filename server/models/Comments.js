import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    videoId:{
        type: String,
    },
    likes:{
        type: [String],
        default:[]
    },
    dislikes:{
        type: [String],
        default: []        
    },
},
{timestamps: true}
)

export default mongoose.model("comments",CommentSchema);
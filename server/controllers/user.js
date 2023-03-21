import User from "../models/User.js" 
import { createError } from "../error.js"
import Video from "../models/Video.js"

export const update = async (req,res,next)=>{
    if(req.params.id === req.user.id) {
        try {
            const UpdatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new : true})
            res.status(200).json(UpdatedUser)
        } catch (error) {
            next(createError(error))
        }
    } else {
        return next(createError(403,"USER CAN ONLY UPDATE HIS ACCOUNT"))
    }
}

export const del = async (req,res,next)=>{
    if(req.params.id === req.user.id) {
        try {
            const DeletedUser = await User.findByIdAndDelete(req.params.id,{
            })
            res.status(200).json(DeletedUser)
        } catch (error) {
            next(createError(error))
        }
    } else {
        return next(createError(403,"USER CAN ONLY DELETE HIS ACCOUNT"))
    }
}
export const get = async (req,res,next)=>{
    try {
        const getUser = await User.findById(req.params.id);
        res.status(200).json(getUser)
    } catch (error) {
        next(error)
    }
}
export const follow = async (req,res,next)=>{
    try {
        await User.findByIdAndUpdate(req.user.id,{              //user.id -- our id
            $push:{following: req.params.id},           //params.id -- other channel id
            $inc:{followingNum : 1}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc: {fansNum: 1},
            $push: {fans: req.user.id}
        })
        res.status(200).json("Followed Successfully")
    } catch (error) {
        next(error)
    }
}
export const unfollow = async (req,res,next)=>{
    try {
        await User.findByIdAndUpdate(req.user.id,{              //user.id -- our id
            $pull:{following: req.params.id},           //params.id -- other channel id
            $inc:{followingNum : -1}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc: {fansNum: -1},
            $pull: {fans: req.user.id}
        })
        res.status(200).json("Unfollowed Successfully")
    } catch (error) {
        next(error)
    }
}
export const like = async (req,res,next)=>{
    const id = req.user.id
    const videoId = req.params.videoid
    try {
        const video = await Video.findByIdAndUpdate(videoId,{
            $addToSet: {likes: id},
            $pull: {dislikes: id},
        })
        if(!video){
            res.status(403).json("Video Not Found");
        }else{
            res.status(200).json("Like Added");
        }
    } catch (error) {
        next(error)
    }
}
export const dislike = async (req,res,next)=>{
    const id = req.user.id
    const videoId = req.params.videoid
    try {
        await Video.findByIdAndUpdate(videoId,{
            $addToSet: {dislikes: id},
            $pull: {likes: id}
        }) 
        res.status(200).json("Dislike Added");
    } catch (error) {
        next(error)
    }
}
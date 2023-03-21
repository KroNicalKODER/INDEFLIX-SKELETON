import { createError } from "../error.js"
import Comments from "../models/Comments.js"
import Video from '../models/Video.js'

export const addComment = async (req,res,next) => {
    const newComment = new Comments({...req.body, userId: req.user.id})
    try {
        const commentSave = await newComment.save()
        res.status(200).send(commentSave)
    } catch (error) {
        next(error);
    }
}

export const deleteComment = async (req,res,next) => {
    try {
        const comment = await Comments.findById(req.params.id)
        const video = await Video.findById(req.params.id)
        if(comment.userId === req.user.id || video.userId === comment.userId){
            await Comments.findByIdAndDelete(req.params.id)
            res.status(200).json("comment deleted successfully")
        } else {
            return next(createError(403),"You can delete only your comment")
        }
    } catch (error) {
        next(error)
    }
}

export const getComment = async (req,res,next) => {
    try {
        const comments = await Comment.find({videoid: req.params.videoid});
        res.status(200).json(comments)
    } catch (error) {
        next(error)
    }
}
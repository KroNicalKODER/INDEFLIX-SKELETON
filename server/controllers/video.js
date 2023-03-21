import User from "../models/User.js"
import Video from "../models/Video.js"
import { createError } from "../error.js"
import { json } from "express"

export const createVideo = async (req, res, next) => {
    const newVideo = new Video({
        userId: req.user.id,
        ...req.body
    })
    try {
        const savedVideo = await newVideo.save()
        res.status(200).json(savedVideo)
    } catch (error) {
        next(error)
    }
}

export const deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id);
        if (video.id === req.user.id) {
            Video.findByIdAndDelete(req.params.id)
            res.status(200).json("video deleted successfully")
        } else {
            res.status(403).json("You can only delete your video")
        }
    } catch (error) {
        next(error)
    }
}

export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "User Not Found"))
        if (req.user.id === video.userId) {
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },
                { new: true })
        } else {
            return next(createError(403, "You can update only your video"))
        }
        res.status(200).json(updatedVideo)
    } catch (error) {
        next(error)
    }
}

export const findVideo = async (req, res, next) => {
    try {
        const video = Video.findById(req.params.id);
        if (!video) res.status(403).json("video not found")
        else {
            res.status(200).json(video)
        }
    } catch (error) {
        next(error)
    }
}

export const randomVideo = async (req, res, next) => {
    try {
        const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}

export const addView = async (req, res, next) => {
    try {
        const video = await Video.findByIdAndUpdate(req.params.id, {
            $inc: { views: 1 }
        })
        res.status(200).json("view increased by 1")
    } catch (error) {
        next(error)
    }
}

export const trending = async (req, res, next) => {     //BY VIEWS
    try {
        const videos = await Video.find().sort({ views: -1 })
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}



export const followed = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        const followedChannels = user.following
        const list = await Promise.all(
            followedChannels.map((channelId) => {
                return Video.find({ userId: channelId })
            })
        )

        res.status(200).json(list.flat())
    } catch (error) {
        next(error)
    }
}

export const search = async (req, res, next) => {
    try {
        const query = req.query.q
        const videos = await Video.find({
            title: {$regex: query, $options: "i" }
        }).limit(40)
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}

export const SearchByTags = async (req, res, next) => {
    const tags = req.query.tags.split(",")
    const videos = await Video.find({ tags: { $in: tags } }).limit(40);
    res.status(200).json(videos);
    console.log(tags);

}

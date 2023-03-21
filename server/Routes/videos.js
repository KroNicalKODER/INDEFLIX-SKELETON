import { addView, createVideo, deleteVideo, findVideo, followed, randomVideo, search, SearchByTags, trending, updateVideo } from '../controllers/video.js'
import express from 'express'
import { getToken } from "../getToken.js"

const router = express.Router()

//CREATE
router.post("/",getToken,createVideo)

//DELETE
router.delete("/:id",getToken,deleteVideo)

//UPDATE
router.put("/:id",getToken,updateVideo)

//FIND
router.get("/find/:id",findVideo)

//ADD VIEW
router.put("/view/:id",addView)

//SUBSCRIBED VIDEO
router.get("/foll",getToken,followed)

//TRENDING VIDEO
router.get("/trend",trending)

//RANDOM VIDEO
router.get("/rand",randomVideo)

//SEARCH BY TAGS
router.get("/tags",SearchByTags)

//SEARCH BY TITLE
router.get("/search",search)

export default router

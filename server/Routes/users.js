import express from 'express'
import {update , del , get , follow , unfollow , like , dislike} from '../controllers/user.js'
import { getToken } from "../getToken.js"

const router = express.Router()

//UPDATE
router.put("/:id",getToken, update)

//DELETE
router.delete("/:id",getToken ,del)


//GET
router.get("/find/:id",get)

//FOLLOW
router.put("/fol/:id",getToken,follow)

//UNFOLLOW
router.put("/unfol/:id",getToken,unfollow)

//LIKE
router.put("/like/:videoid",getToken,like)

//DISLIKE
router.put("/dislike/:videoid",getToken,dislike)


export default router
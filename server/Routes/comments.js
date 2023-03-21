import { addComment, deleteComment, getComment } from '../controllers/comment.js'
import express from "express"
import { getToken } from '../getToken.js'

const router = express.Router()

router.post("/", addComment)

router.delete("/:id", getToken ,deleteComment)

router.get("/:videoid",getComment)
export default router

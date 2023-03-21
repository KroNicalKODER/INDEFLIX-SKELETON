import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const getToken = (req,res,next)=>{
    const token = req.cookies.access_token
    if(!token) return next(createError(401,"UNAUTHENTICATED USER"))

    jwt.verify(token, process.env.JWT, (err,user)=>{
        if(err) return next(createError(403,"INVALID USER"))
        req.user = user
        next()
    })
}
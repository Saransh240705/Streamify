import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const protectRoute = async (req, res, next) => {

    try {
        const token = req.cookies.jwt;

        if(!token) {
            return res.status(401).json({ message: "Unauthorized - no token provided" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
         if(!decoded) {
            return res.status(401).json({ message: "Unauthorized - invalid token" });
         }

         const user = await User.findById(decoded.userId);

         if(!user) {
            return res.status(401).json({ message: "Unauthorized - user not found" });
         }
    } catch (error) {
        
    }
}
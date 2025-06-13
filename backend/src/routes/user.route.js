import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getRecommendedUsers, getFriends, sendFriendRequest, acceptFriendRequest, getFriendRequests, getOutgoingFriendReqs } from '../controllers/user.controller.js';

const router = express.Router();
 
// apply the protectRoute middleware to all routes in this router
router.use(protectRoute);

router.get('/', getRecommendedUsers);
router.get("/friends", getFriends);
router.post('/friend-request/:id', sendFriendRequest);
router.put('/friend-request/:id/accept', acceptFriendRequest);

router.get("/friend-request", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs)

export default router;
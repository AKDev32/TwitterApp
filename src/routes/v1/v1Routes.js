import express from 'express';
import tweetRouter from './tweet.js';
import commentRouter from '/comment.js';

const router = express.Router(); // create a new router object

router.use ('/tweet', tweetRouter);  // if the remaining url starts with /tweet, use the tweetRouter
router.use ('/comment', commentRouter);  // if the remaining url starts with /comment, use the commentRouter

export default router;
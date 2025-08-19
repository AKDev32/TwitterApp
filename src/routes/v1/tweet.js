import express from 'express';
import { getTweetById, getTweets, createTweet } from '../../controller/tweetController.js';

const router = express.Router();

router.get ('/', getTweets);

router.get ('/:id', getTweetById);

router.post('/', createTweet);

export default router;

// localhost:3000/tweet GET
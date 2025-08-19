import express from 'express';
import { getTweetById, getTweets, createTweet } from '../../controller/tweetController.js';
import { validate } from '../../validators/zodValidator.js';
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';

const router = express.Router();

router.get ('/', getTweets);

router.get ('/:id', getTweetById);

router.post('/', validate(tweetZodSchema), createTweet);

export default router;

// localhost:3000/tweet GET
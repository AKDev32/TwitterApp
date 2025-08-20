import { Filter } from 'bad-words';
import { createTweet as createTweetRepository } from '../repositories/tweetRepository.js';

export const createTweet = async ({ body }) => {
    // Try to find the blocked words in the tweet body and if any exists don't create the tweet and return an error message

    const filter = new Filter();

    if (filter.isProfane(body)) {
        console.log(body);
        console.log(filter.clean(body));
        throw new Error("Tweet contains blocked words");
    }


    const tweet = await createTweetRepository ({ body });

    return tweet;
}
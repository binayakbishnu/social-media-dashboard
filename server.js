const express = require('express');
const app = express();
const PORT = 5000; // or any other port number you prefer

require('dotenv').config({ path: './API_secrets/.env' });

// Define API routes or middleware here
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});
// by default in "http://localhost:5000/api/hello"


//* main code
// Middleware for handling API requests
app.use(express.json());

// API endpoints for retrieving user statistics
const Twit = require('twit');
app.get('/api/twitter/stats', async (req, res) => {
    try {
        const twitterKey = process.env.twitter_consumer_key
        const twitterSecret = process.env.twitter_consumer_secret
        const twitterToken = process.env.twitter_access_token
        const twitterTokenSecret = process.env.twitter_access_token_secret

        // Create a new instance of the Twitter API client
        const T = new Twit({
            consumer_key: twitterKey,
            consumer_secret: twitterSecret,
            access_token: twitterToken,
            access_token_secret: twitterTokenSecret,
        });

        // Retrieve the user's Twitter profile information
        const { data: profile } = await T.get('account/verify_credentials');

        // Extract the relevant statistics from the 
        const name = profile.name;
        const username = profile.screen_name;
        const followers = profile.followers_count;
        const following = profile.friends_count;
        const tweetCount = profile.statuses_count;
        // const tweets = profile.statuses_count;

        // Send the user statistics as a response
        res.json({ name, username, followers, following, tweetCount });
    } catch (error) {
        console.error('Error retrieving Twitter user statistics:', error);
        res.status(500).json({ error: 'Failed to retrieve Twitter user statistics' });
    }
});

app.get('/api/instagram/stats', (req, res) => {
    // Retrieve Instagram user statistics using Instagram API
    // Process the data and send it back as a response
    // Example: res.json({ followers: 1000, posts: 50 });
});

app.get('/api/facebook/stats', (req, res) => {
    // Retrieve Facebook user statistics using Facebook API
    // Process the data and send it back as a response
    // Example: res.json({ likes: 500, comments: 200 });
});

app.get('/api/linkedin/stats', (req, res) => {
    // Retrieve LinkedIn user statistics using LinkedIn API
    // Process the data and send it back as a response
    // Example: res.json({ connections: 500, posts: 20 });
});

app.get('/api/reddit/stats', (req, res) => {
    // Retrieve Twitter user statistics using Twitter API
    // Process the data and send it back as a response
    // Example: res.json({ followers: 1000, tweets: 100 });
});





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

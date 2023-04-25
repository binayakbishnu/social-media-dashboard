import React from 'react'

import componentStyles from './Component.module.css'

function Twitter({ twitterStats }) {
  return (
    <div className={`${componentStyles.parentContainer}`}>
      <h3>Twitter</h3>
      <p>Username: {twitterStats.username}</p>
      <p>Followers: {twitterStats.followers}</p>
      <p>Following: {twitterStats.following}</p>
      <p>Tweets: {twitterStats.tweetCount}</p>
    </div>
  )
}

export default Twitter
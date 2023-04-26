import React from 'react'

import componentStyles from './Component.module.css'

function Component({ details, stats }) {
    return (
        <div className={`${componentStyles.parentContainer}`}>
            <h3>{details.name}</h3>
            {/* <p>Username: {stats.username}</p>
            <p>Followers: {stats.followers}</p>
            <p>Following: {stats.following}</p>
            <p>Tweets: {stats.tweetCount}</p> */}

            <p>{details}</p>
            <p>{details.name}</p>
            <p>{details.statLabels}</p>
            <p>{stats}</p>
        </div>
    )
}

export default Component
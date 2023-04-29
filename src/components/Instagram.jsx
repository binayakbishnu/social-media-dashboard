import React from 'react'

import componentStyles from './Component.module.css'

function Instagram({instagramStats}) {
  return (
    <div className={`${componentStyles.outerParent}`}>
      <div className={`${componentStyles.parentContainer}`}>
        {/* <div className={`${componentStyles.parentHeadingContainerBorder}`}> */}
        <div className={`${componentStyles.parentHeadingContainer}`}>
          <h3 className={`${componentStyles.parentHeading}`}>Instagram</h3>
          <div className={`${componentStyles.parentHeadingLine}`}></div>
        </div>
        {/* </div> */}
        <div className={`${componentStyles.mainContent}`}>
          <p className={`${componentStyles.dataFields}`}>
            Username: <span className={`${componentStyles.dataValues}`}> {instagramStats.username ? instagramStats.username : 'loremipsum'}</span>
          </p>
          <p className={`${componentStyles.dataFields}`}>
            Followers: <span className={`${componentStyles.dataValues}`}> {instagramStats.followers ? instagramStats.followers : 100}</span>
          </p>
          <p className={`${componentStyles.dataFields}`}>
            Following: <span className={`${componentStyles.dataValues}`}> {instagramStats.following ? instagramStats.following : 100}</span>
          </p>
          <p className={`${componentStyles.dataFields}`}>
            Tweets: <span className={`${componentStyles.dataValues}`}> {instagramStats.tweetCount ? instagramStats.tweetCount : 100}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Instagram
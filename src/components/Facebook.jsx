import React from 'react'

import componentStyles from './Component.module.css'

function Facebook({facebookStats}) {
  return (
    <div className={`${componentStyles.outerParent}`}>
      <div className={`${componentStyles.parentContainer}`}>
        {/* <div className={`${componentStyles.parentHeadingContainerBorder}`}> */}
        <div className={`${componentStyles.parentHeadingContainer}`}>
          <h3 className={`${componentStyles.parentHeading}`}>Facebook</h3>
          <div className={`${componentStyles.parentHeadingLine}`}></div>
        </div>
        {/* </div> */}
        <div className={`${componentStyles.mainContent}`}>
          <p className={`${componentStyles.dataFields}`}>
            Username: <span className={`${componentStyles.dataValues}`}> {facebookStats.username ? facebookStats.username : 'loremipsum'}</span>
          </p>
          <p className={`${componentStyles.dataFields}`}>
            Followers: <span className={`${componentStyles.dataValues}`}> {facebookStats.followers ? facebookStats.followers : 100}</span>
          </p>
          <p className={`${componentStyles.dataFields}`}>
            Following: <span className={`${componentStyles.dataValues}`}> {facebookStats.following ? facebookStats.following : 100}</span>
          </p>
          <p className={`${componentStyles.dataFields}`}>
            Tweets: <span className={`${componentStyles.dataValues}`}> {facebookStats.tweetCount ? facebookStats.tweetCount : 100}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Facebook
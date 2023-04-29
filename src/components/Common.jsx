import React from 'react'

import componentStyles from './Component.module.css'
import commonStyles from './Common.module.css'

function Common() {
  return (
    <div className={`${componentStyles.outerParent} ${commonStyles.outerParent}`}>
      <div className={`${componentStyles.parentContainer}`}>
      <div className={`${componentStyles.parentHeadingContainer}`}>
          <h3 className={`${componentStyles.parentHeading}`}>Common</h3>
          <div className={`${componentStyles.parentHeadingLine} ${commonStyles.parentHeadingLine}`}></div>
        </div>

        <div className={`${componentStyles.mainContent}`}>
          <p className={`${componentStyles.dataFields}`}>
            Username: <span className={`${componentStyles.dataValues}`}></span>
          </p>
          <p className={`${componentStyles.dataFields}`}>
            Followers: <span className={`${componentStyles.dataValues}`}></span>
          </p>
          <p className={`${componentStyles.dataFields}`}>
            Following: <span className={`${componentStyles.dataValues}`}></span>
          </p>
          <p className={`${componentStyles.dataFields}`}>
            Tweets: <span className={`${componentStyles.dataValues}`}></span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Common
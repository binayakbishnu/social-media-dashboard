import React from 'react'

import dashBoardStyles from './Dashboard.module.css'

import Instagram from './components/Instagram'
import Facebook from './components/Facebook'
import LinkedIn from './components/LinkedIn'
import Twitter from './components/Twitter'
import Reddit from './components/Reddit'
import AddMore from './components/AddMore'
import Common from './components/Common'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Common />
      <div className={`${dashBoardStyles.mainContentParent}`}>
        <Instagram />
        <Facebook />
        <LinkedIn />
        <Twitter />
        <Reddit />

        <AddMore />
      </div>
    </div>
  )
}

export default Dashboard
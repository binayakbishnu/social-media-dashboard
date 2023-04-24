// import React from 'react'
import React, { useEffect, useState } from 'react';

import dashBoardStyles from './Dashboard.module.css'

import Instagram from './components/Instagram'
import Facebook from './components/Facebook'
import LinkedIn from './components/LinkedIn'
import Twitter from './components/Twitter'
import Reddit from './components/Reddit'
import AddMore from './components/AddMore'
import Common from './components/Common'

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fetch data from backend API
      fetch('/api/hello')
        .then(response => response.json())
        .then(data => setData(data));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {data ? (
        <p>{data.message}</p>
      ) : (
        <p>Loading data from backend...</p>
      )}

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
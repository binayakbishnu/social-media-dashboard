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

  const [twitterStats, setTwitterStats] = useState({});
  const [instagramStats, setInstagramStats] = useState({});
  const [facebookStats, setFacebookStats] = useState({});
  const [linkedinStats, setLinkedinStats] = useState({});

  useEffect(() => {
    //- fetching data from backend
    const fetchTwitterStats = () => {
      fetch('/api/twitter/stats')
        .then(res => res.json())
        .then(data => setTwitterStats(data))
        .catch(error => console.error(error));
    };
    const fetchInstagramStats = () => {
      fetch('/api/instagram/stats')
        .then(res => res.json())
        .then(data => setInstagramStats(data))
        .catch(error => console.error(error));
    };

    const fetchFacebookStats = () => {
      fetch('/api/facebook/stats')
        .then(res => res.json())
        .then(data => setFacebookStats(data))
        .catch(error => console.error(error));
    };

    const fetchLinkedInStats = () => {
      fetch('/api/linkedin/stats')
        .then(res => res.json())
        .then(data => setLinkedinStats(data))
        .catch(error => console.error(error));
    };
    const fetchRedditStats = () => {
      fetch('/api/reddit/stats')
        .then(res => res.json())
        .then(data => setTwitterStats(data))
        .catch(error => console.error(error));
    };


    //- fetching initial data
    fetchTwitterStats();
    fetchInstagramStats();
    fetchFacebookStats();
    fetchLinkedInStats();
    fetchRedditStats();


    //- fetching data every 5 seconds
    const interval = setInterval(() => {
      // Fetch data from backend API
      fetch('/api/hello')
        .then(response => response.json())
        .then(data => setData(data));

      //- fetching data
      fetchTwitterStats();
      fetchInstagramStats();
      fetchFacebookStats();
      fetchLinkedInStats();
      fetchRedditStats();
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
        {twitterStats && (
          <Twitter
            twitterStats={twitterStats}
          />
        )}

        {instagramStats && (
          <Instagram
            instagramStats={instagramStats}
          />
        )}
        {facebookStats && (
          <Facebook
            facebookStats={facebookStats}
          />
        )}
        {linkedinStats && (
          <LinkedIn
            linkedinStats={linkedinStats}
          />
        )}


        <Reddit />

        <AddMore />
      </div>
    </div>
  )
}

export default Dashboard
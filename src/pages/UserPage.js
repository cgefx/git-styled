import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import UserInfo from '../components/UserInfo/UserInfo';
import Charts from '../components/Charts/Charts';
import Repos from '../components/Repos/Repos';
import mockUserData from '../utils/mockUserData';
import mockRepoData from '../utils/mockRepoData';

const UserPage = (props) => {
  const username = props.match.params.username;
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {

    setUserData(mockUserData);
    // setLangData(mockLangData);
    setRepoData(mockRepoData);
  }, []);

  return (
    <>
      <Navbar />
      <main>

        <section className="section">
          <div className="flex-row">
            {userData && <UserInfo userData={userData} />}
            <Charts />
          </div>
        </section>

        <section className="section">
          {repoData && <Repos repoData={repoData} />}
        </section>
      </main>
    </>
  );
};

export default UserPage;

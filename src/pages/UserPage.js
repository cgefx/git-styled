import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import UserInfo from '../components/UserInfo/UserInfo';
import Charts from '../components/Charts/Charts';
import Repos from '../components/Repos/Repos';

const UserPage = () => {
  return (
    <>
      <Navbar />
      <section className="section">
        <div className="flex-row">
          <UserInfo />
          <Charts />

        </div>
      </section>
      <section className="section">
        <Repos />
      </section>
    </>
  );
};

export default UserPage;

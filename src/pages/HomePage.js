import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import UserForm from '../components/UserForm/UserForm';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <UserForm />
        </section>
      </main>
    </>
  );
};

export default HomePage;

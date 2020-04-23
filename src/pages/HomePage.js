import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import UserForm from '../components/UserForm/UserForm';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section class="section">
          <UserForm />
        </section>
      </main>
    </>
  );
};

export default HomePage;

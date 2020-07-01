import React from 'react'
import { UserForm, Navbar } from '../components'

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
  )
}

export default HomePage

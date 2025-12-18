import React from 'react'
import Header from '../components/Header/Header'
import SignUpSingnIn from '../components/SignupSignin/SignUpSingnIn'

const Signup = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <SignUpSingnIn />
      </div>
    </div>
  )
}

export default Signup
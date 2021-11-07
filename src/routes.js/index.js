import React, { useState } from 'react'

import Landing from '../pages/Landing/Landing';


const Routes = () => {

  // loggedIn, connecting, logInUser, logOutUser, subLoading, user, isSubscribed, onSubscribe, onInputChange,

  const [connecting, setConnecting] = useState(false);
  const [subLoading, setSubLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [userForm, setUserForm] = useState({
    first_name: '',
    email: ''
  });

  const logInUser = () => {
    setConnecting(true)

    setTimeout(() => {
      setLoggedIn(true)
    }, 3000)

    setTimeout(() => {
      setConnecting(false)
    }, 3000)
  }

  const logOutUser = () => {
    setConnecting(true)

    setTimeout(() => {
      setLoggedIn(false)
    }, 3000)

    setTimeout(() => {
      setConnecting(false)
    }, 3000)
  }

  const onSubscribe = () => {
    if (userForm.first_name === '' || userForm.email === '') {
      alert('Enter your first name and email to subscribe!')
    } else {
      setSubLoading(true)

      setTimeout(() => {
        setIsSubscribed(true)
      }, 3000)

      setTimeout(() => {
        setSubLoading(false)
      }, 3000)
    }
  }

  const onInputChange = (evt) => {
    const { name, value } = evt.target;

    setUserForm({
      ...userForm,
      [name]: value
    })
  }

  return (
    <div>
      <Landing
        loggedIn={loggedIn}
        connecting={connecting}
        logInUser={logInUser}
        logOutUser={logOutUser}
        subLoading={subLoading}
        user={userForm}
        isSubscribed={isSubscribed}
        onSubscribe={onSubscribe}
        onInputChange={onInputChange}
      />
    </div>
  );
}

export default Routes

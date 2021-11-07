import React, { useState } from 'react'

import Header from '../../components/Header/Header'
import Subscription from '../../components/Subscription/Subscription'

import { Container, Banner } from './styles'


export const Landing = () => {
  const [connecting, setConnecting] = useState(false);
  const [subLoading, setSubLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [userForm, setUserForm] = useState({
    first_name: '',
    email: ''
  });

  const logIn = (evt) => {
    setConnecting(true)

    setLoggedIn(true)

    setTimeout(() => {
      setConnecting(false)
    }, 3000)
  }

  const logOut = (evt) => {
    setConnecting(true)

    setLoggedIn(false)

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
    <Container>
      <Header
        loggedIn={loggedIn}
        loading={connecting}
        loginUser={logIn}
        logOutUser={logOut}
      />

      <Banner>
        <main>
          <h2>Explore our ape metaverse and build your own virtual world</h2>
          <h5>Join our community and get your own personalized ApenetNFT, nurture your Ape from baby to a monster king, join tournaments to win rewards and cryptoKings coins.</h5>
        </main>
      </Banner>

      <Subscription
        loading={subLoading}
        user={userForm}
        isSubscribed={isSubscribed}
        onSubscribe={onSubscribe}
        onInputChange={onInputChange}
      />
    </Container>
  )
}


export default Landing

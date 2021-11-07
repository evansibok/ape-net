import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../components/Header/Header'
import Subscription from '../../components/Subscription/Subscription'

import { Container, Banner } from './styles'


export const Landing = ({ loggedIn, connecting, logInUser, logOutUser, subLoading, user, isSubscribed, onSubscribe, onInputChange,
}) => {
  // const [connecting, setConnecting] = useState(false);
  // const [subLoading, setSubLoading] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [isSubscribed, setIsSubscribed] = useState(false);
  // const [userForm, setUserForm] = useState({
  //   first_name: '',
  //   email: ''
  // });

  // const logIn = (evt) => {
  //   setConnecting(true)

  //   setLoggedIn(true)

  //   setTimeout(() => {
  //     setConnecting(false)
  //   }, 3000)
  // }

  // const logOut = (evt) => {
  //   setConnecting(true)

  //   setLoggedIn(false)

  //   setTimeout(() => {
  //     setConnecting(false)
  //   }, 3000)
  // }

  // const onSubscribe = () => {
  //   if (userForm.first_name === '' || userForm.email === '') {
  //     alert('Enter your first name and email to subscribe!')
  //   } else {
  //     setSubLoading(true)

  //     setTimeout(() => {
  //       setIsSubscribed(true)
  //     }, 3000)

  //     setTimeout(() => {
  //       setSubLoading(false)
  //     }, 3000)
  //   }
  // }

  // const onInputChange = (evt) => {
  //   const { name, value } = evt.target;

  //   setUserForm({
  //     ...userForm,
  //     [name]: value
  //   })
  // }

  return (
    <Container>
      <Header
        loggedIn={loggedIn}
        loading={connecting}
        logInUser={logInUser}
        logOutUser={logOutUser}
      />

      <Banner>
        <main>
          <h2>Explore our ape metaverse and build your own virtual world</h2>
          <h5>Join our community and get your own personalized ApenetNFT, nurture your Ape from baby to a monster king, join tournaments to win rewards and cryptoKings coins.</h5>
        </main>
      </Banner>

      <Subscription
        loading={subLoading}
        user={user}
        isSubscribed={isSubscribed}
        onSubscribe={onSubscribe}
        onInputChange={onInputChange}
      />
    </Container>
  )
}

Landing.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  connecting: PropTypes.bool.isRequired,
  logOutUser: PropTypes.func,
  logInUser: PropTypes.func,
  subLoading: PropTypes.bool.isRequired,
  user: PropTypes.shape({}),
  isSubscribed: PropTypes.bool.isRequired,
  onSubscribe: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
}

Landing.defaultProps = {
  loggedIn: false,
  connecting: false,
  logOutUser: undefined,
  logInUser: undefined,
  subLoading: false,
  user: null,
  isSubscribed: false,
  onSubscribe: undefined,
  onInputChange: undefined,
}


export default Landing

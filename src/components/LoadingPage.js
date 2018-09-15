import React from 'react'
import Backdrop from '../styles/Backdrop.js'
import loader from '../images/loader.gif'

const LoadingPage = () => (
  <Backdrop>
    <img src={loader} alt='loader' />
  </Backdrop>
)

export default LoadingPage

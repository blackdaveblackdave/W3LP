import { NextPage } from 'next'
import React from 'react'
import Page from '../src/app/page'

const HomePage: NextPage = () => {
  return ( <>
      <h1>Welcome to the Home Page</h1>
      <Page />
      </>
  )
}

export default HomePage
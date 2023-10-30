import React from 'react'
import { ConnectButton } from '../components/ConnectButton'
import { Connected } from '../components/Connected'

export function Page() {

  return (
    <>


      <h1>wagmi + RainbowKit + Next.js</h1>
      
      <ConnectButton />

      <Connected>
        <hr />
        <h1>You're connected.</h1>
      </Connected>
    </>
  )
}

export default Page
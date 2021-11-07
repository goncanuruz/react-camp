import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignOut({handleSignIn}) {
    return (
        <div>
      <Button onClick={handleSignIn} primary >Sign Up</Button>
      <Button >Login</Button>

        </div>
    )
}

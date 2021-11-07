import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignIn({handleSignOut}) {
    

    return (
        <div>        
            <Menu.Item>
            <Image avatar spaced="right" src="https://global-uploads.webflow.com/5e4627609401e01182af1cce/5eb13bfdb4659efea4f8dace_profile-dummy.png"/>
            <Dropdown pointing="top left" text="Gonca">
          <Dropdown.Menu>
            <Dropdown.Item text="Account" icon="info"/>
            <Dropdown.Item onClick={handleSignOut}text="Log Out" icon="info"/>
          </Dropdown.Menu>
        </Dropdown>

            </Menu.Item>
        </div>
    )
}

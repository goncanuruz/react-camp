import React from 'react'
import { Button, Menu ,Container} from 'semantic-ui-react'
import CartSummaries from './CartSummaries'


export default function Navi() {
    return (
        <div className="navi" fixed="top">
            <Menu inverted>
                <Container>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />
                <Menu.Menu position='right'>
<CartSummaries/>

                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}

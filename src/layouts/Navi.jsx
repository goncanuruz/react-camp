import React, {useState} from "react";
import { Container, Menu } from "semantic-ui-react";
import SignOut from "./SignOut";
import SignIn from "./SignIn";
import { useNavigate } from "react-router";
import CartSummaries from "./CartSummaries";
import { Link } from "react-router-dom";
export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate = useNavigate()
  function handleSignOut() {
    setIsAuthenticated(false)
    navigate('/');
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div className="navi" fixed="top">
    <Menu inverted>
        <Container>
            <Menu.Item>                
                <Link to={`/`}>
                Home
                </Link>
                </Menu.Item>
                <Menu.Item>                
                <Link to={`/products`}>
                Products
                </Link>
                </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <CartSummaries />
                </Menu.Item>

                {isAuthenticated ?
                    <Menu.Item>
                        <SignIn handleSignOut={handleSignOut} />
                    </Menu.Item>
                    :
                    <Menu.Item>
                        <SignOut handleSignIn={handleSignIn} />
                    </Menu.Item>
                }
            </Menu.Menu>
        </Container>

    </Menu>
</div>
  );
}
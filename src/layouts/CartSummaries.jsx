import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dropdown,Label } from "semantic-ui-react";
export default function CartSummaries() {


  const {cartItems} = useSelector(state => state.cart)

    return (
        <div>
            <Dropdown item text="Sepetiniz">
              <Dropdown.Menu >
                {
                  cartItems.map((cartItem)=>(
                    <Dropdown.Item key={cartItem.product.productId}>{cartItem.product.productName}
                    <Label>{cartItem.quantity}</Label></Dropdown.Item>
                  ))
                }
                <Dropdown.Divider/>
                {
                  cartItems.length>0? <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>:
                  <Dropdown.Item as={NavLink} to="/cart">Ürün yok</Dropdown.Item>
                }
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

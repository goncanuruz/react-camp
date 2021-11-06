import React from 'react'
import CartSummaries from './CartSummaries'
import Categories from './Categories'
import Navi from './Navi'

export default function Dashboard() {
    return (
        <div>
<Navi/>
<Categories/>
<CartSummaries/>
        </div>
    )
}

import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="ui grid">
                <div className="four wide column">
                    <Categories />
                </div>
                <div className="twelve wide column">
                    <ProductList />
                </div>
            </div>
        </div>
    )
}

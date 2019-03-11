import React from 'react'
import {Link} from 'react-router-dom'

const ProductSummary = ({id, name, price}) => (
    <Link to={`/p/${id}`}> 
        <div>
            <span>{name}</span> - <span>{price.base} {price.amount}</span>
        </div>
    </Link>
)
export default ProductSummary
import React, { useState, useEffect } from 'react'
import '../../theme/style/basketStyle/basket.css'

const Basket = () => {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        const prods = window.localStorage.getItem('bucket')
        let parsedProducts = JSON.parse(prods)
        setProducts(parsedProducts)
    }, [])
    const removeItem = (prod) => {
        let newList = products.filter(e => (e != prod))
        window.localStorage.setItem('bucket', JSON.stringify(newList))
        setProducts(newList)
    }
    return (
        <div className='basket-wrapper'>
            <div className='products-purchase info'>
                {products?.map((prod, i) => {
                    return (<div className='products-cancel' key={i}>
                        <h3>{prod}</h3>
                        <h4 onClick={() => removeItem(prod)}>x</h4>
                    </div>)
                })}
            </div>
            <div className='purchase-confirm'>
               {products?.length ? <button>Confirm</button> : null}
            </div>
        </div>
    )
}

export default Basket
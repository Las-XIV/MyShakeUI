import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import '../../theme/style/navbar.css'
const Navbar = (props) => {
    const [url, setUrl] = useState('/')
    const [classname, setClassname] = useState('logo-wrapper')
    const [productsView, setProductsView] = useState(true)
    const ShoppingCartStyle = { color: 'white', position: 'absolute', right: '20', top: '20', border: '2px solid black', borderStyle: 'dotted', borderRadius: '100px', fontSize: '30px', padding: '5px', cursor: 'pointer' }
    let history = useHistory()
    const toRoute = (endpoint) => {
        setUrl(endpoint)
        history.push(endpoint)
    }
    useEffect(() => {
        let cname = window.location.href.split('/').includes('products') ? 'logo-wrapper-products' : 'logo-wrapper'
        cname == 'logo-wrapper-products' ? setProductsView(true) : setProductsView(false)
        setClassname(cname)
    }, [url])
    return (
        <div className='navbar-container'>
            <section>
                <div className={classname}>
                    MyShake
                </div>
            </section>
            <section className='navbar-list-container'>
                <ul className='navbar-list'>
                    <li onClick={() => toRoute('/home')}>HOME</li>
                    <li onClick={() => toRoute('/products')}>PRODUCTS</li>
                    <li onClick={() => toRoute('/about')}>ABOUT US</li>
                </ul>
                {productsView ?
                    <AddShoppingCartIcon style={ShoppingCartStyle} /> :
                    <ShoppingCartIcon style={ShoppingCartStyle} /> 
                }
            </section>
        </div>
    )
}

export default Navbar
import React from 'react'
import '../../theme/style/navbar.css'
const Navbar = (props) =>{
    return(
        <div className='navbar-container'>
            <section>
                <div className='logo-wrapper'>
                </div>
            </section>
            <section className='navbar-list-container'>
                <ul className='navbar-list'>
                    <li>HOME</li>
                    <li>PRODUCTS</li>
                    <li>ABOUT US</li>
                </ul>
            </section>
        </div>
    )
}

export default Navbar
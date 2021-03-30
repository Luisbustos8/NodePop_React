import React from 'react'
import classNames from 'classnames'

import './Header.css'
import Button from '../shared/Button'


const Header = ({className, isLogged, ...props}) => {
    return (
        <header className={classNames('header', className)}>
            <div className="header-logo">
            </div>
            
            <nav className="header-nav">

            {isLogged ? (
                <Button
                    className="Header-button"
                    //onClick={()=> logout().then(onLogout)}
                >
                    Log out
                </Button>
            ) : (
                <Button 
                   // as={Link} 
                   // to="/login" 
                    className="header-button"
                >
                    Login
                </Button>    
            )};
            </nav>
        </header>
    )
}

export default Header;
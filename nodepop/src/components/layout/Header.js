import React from 'react'
import classNames from 'classnames'

import './Header.css'
import Button from '../shared/Button'


const Header = ({className}) => {
    return (
        <header className={classNames('header', className)}>
            <div className="header-logo">
            </div>
            
            <nav className="header-nav">
                <Button 
                variant="primary"
                className="header-button"
            >
                Log In
            </Button>
            </nav>
        </header>
    )
}

export default Header;
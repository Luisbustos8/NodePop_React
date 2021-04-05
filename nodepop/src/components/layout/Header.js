import React from 'react'
import classNames from 'classnames'
import './Header.css'
import Button from '../shared/Button'
import AuthButton from '../shared/authButton'


const Header = ({className, isLogged, onLogout, ...props}) => {
    return (
        <header className={classNames('header', className)}>
            <div className="header-logo">
            </div>
            <nav className="header-nav">
                <Button 
                    //to="/newAdvert"
                    variant="primary"
                    className="header-button"
                    disabled={!isLogged}
                >
                    Nuevo anuncio
                </Button>
                <AuthButton 
                className="header-button"
                isLogged={isLogged}
                onLogout={onLogout}
                />
            </nav>
        </header>
    )
}

export default Header;
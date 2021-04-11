import React from 'react'
import classNames from 'classnames'
import './Header.css'
import Button from '../shared/Button'
import AuthButton from '../shared/authButton'
import {Link}  from 'react-router-dom'
import logo from '../../assets/nodepop.png'


const Header = ({className, isLogged, onLogout, ...props}) => {
    return (
        <header className={classNames('header', className)}>
            <Link to="/">
                <div className="header-logo">
                    <img className='logo' src={logo}></img>
                </div>
            </Link>
            <nav className="header-nav">
                <Button 
                    as={Link}
                    to="/advert"
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
import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

function Header({ title, onClick, isShow }) {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    onClick={onClick}
                    color={isShow ? 'orange' : 'limegreen'}
                >
                    {isShow ? 'Close' : 'Add'}
                </Button>
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Header

import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, color, onClick }) {
    return (
        <button onClick={onClick} className='btn' style={{ background: color }}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    color: PropTypes.string,
}

export default Button

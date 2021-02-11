// No longer needed. Optional really.
import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    )
}

Header.defaultProps = {
    name: "User!"
}






export default Header

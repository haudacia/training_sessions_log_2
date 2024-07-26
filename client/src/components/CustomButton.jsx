import React from 'react'
import { NavLink } from 'react-router-dom'

function CustomButton({ to, className, children }) {
    return (
        <>
            <button className='h-10 w-10 items-center pr-0.5 justify-center flex font-sans text-3xl bg-fuchsia-200 hover:bg-gradient-0 rounded-full border-2 border-black'>
                <NavLink
                    to={to}
                    className={`${className}`}
                >
                    {children}
                </NavLink>
            </button>
        </>
    )
}

export default CustomButton
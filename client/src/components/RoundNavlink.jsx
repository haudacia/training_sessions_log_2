import React from 'react'
import { NavLink } from 'react-router-dom'

function RoundNavlink({ to, className, children }) {
    return (
        <>
            <button className='h-fit w-content px-12 font-victor italic text-2xl bg-fuchsia-200 hover:bg-gradient-0 hover:shadow-glow rounded-full border-2 border-black'>
                <NavLink
                    to={to}
                    className={`hover:underline mb-4${className}`}
                >
                    {children}
                </NavLink>
            </button>
        </>

    )
}

export default RoundNavlink
import React from 'react'

function Footer() {
    return (
        <footer className='flex justify-between px-8 items-end z-50 fixed bottom-0 h-[15vh] w-screen bg-gradient-2'>
            <img className='size-16' alt='icon-2' src='src/assets/pearl.png'></img>
            <ul className='flex justify-around gap-8 items-center'>
                <li>
                    <img className='size-20' alt='icon-1' src='src/assets/shape-gradient.svg'></img>
                </li>
                {/* <li>
                    <img className='size-16' alt='icon-2' src='src/assets/pearl.png'></img>
                </li> */}
                {/* <li>
                    <img className='size-16' alt='icon-3' src='src/assets/pearl.png'></img>
                </li> */}
                {/* <li>
                    <img className='size-24' alt='icon-4' src='src/assets/amber-3d-shape.png'></img>
                </li> */}
                {/* <li>
                    <img className='size-16' alt='icon-5' src='src/assets/bolha-metalica.png'></img>
                </li> */}
            </ul>

        </footer>
    )
}

export default Footer
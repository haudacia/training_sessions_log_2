import React from 'react'
import CustomButton from '../components/CustomButton'
import Select from '../components/Select'

function TrackSession() {
    return (
        <div className='m-auto'>TrackSession
            <Select>            </Select>

            <CustomButton>
                ▶
            </CustomButton>
            <CustomButton>
                ◀ </CustomButton>
            <CustomButton>
                ◼</CustomButton>
            <CustomButton>
                ❚ ❚
            </CustomButton>
        </div >
    )
}

export default TrackSession
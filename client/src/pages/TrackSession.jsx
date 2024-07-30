import React from 'react'
import CustomButton from '../components/CustomButton'
import Select from '../components/Select'
import { newTrainingSession } from '../utils/api.js'

const TrackSession = () => {
    const handleNewSession = async () => {
        try {
            const data = await newTrainingSession();
            console.log('Training session created:', data);
        } catch (error) {
            console.error('Error creating training session:', error);
        }
    }
    return (
        <div className='m-auto'>TrackSession
            <Select>            </Select>

            <CustomButton onClick={handleNewSession}>
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
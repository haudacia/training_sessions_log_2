import React from 'react'
import CustomButton from '../components/CustomButton'
import Select from '../components/Select'
import { newTrainingSession, handleEndTrainingSession } from '../utils/api.js'

// const deadline = "August, 1, 2024";

// const getTime = () => {
//     const time = Date.now() - Date.parse(deadline);
//     // const time = Date.parse(deadline) - Date.now();

// }
// getTime()
const TrackSession = () => {
    return (
        <div className='m-auto'>
            <Select>            </Select>

            <CustomButton onClick={() => newTrainingSession(
                {
                    'exercises': [
                        {
                            'exercise': 'split squat',
                            'sets': [
                                {
                                    'reps': 8, 'weightload': 20
                                }
                            ]
                        }
                    ],
                    creationDateTime: new Date()
                }
            )
            }
            >▶
            </CustomButton>
            <CustomButton>
                ◀ </CustomButton>
            <CustomButton onClick={() => handleEndTrainingSession('66aa29dfc4c08cd517a19ace')}>
                ◼</CustomButton>
            <CustomButton>
                ❚ ❚
            </CustomButton>
        </div>
    )
}

export default TrackSession
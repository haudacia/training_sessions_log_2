import React from 'react'
import RoundNavlink from '../components/RoundNavlink'

function MyWorkouts() {
    return (
        <div className='flex rounded-3xl shadow-glow bg-[#D7D0BA] bg-center bg-no-repeat flex-col p-4 m-auto'>
            MyWorkouts
            <div>
                <h1>current workout split</h1>
                <ol>
                    <radio>calf raises</radio>
                    <li>calf raises</li>
                    <li>calf raises</li>
                    <li>calf raises</li>
                    <li>calf raises</li>
                </ol>
            </div>
            <RoundNavlink>
                create new workout plan
            </RoundNavlink>
        </div>
    )
}

export default MyWorkouts
import React from 'react'
import RoundNavlink from '../components/RoundNavlink'

function MyWorkouts() {
    return (
        <div className='flex rounded-xl bg-gradient-1 flex-col p-4 m-auto'>
            MyWorkouts
            <div>
                <h1>current workout split</h1>
                <ol>
                    <li>calf raises</li>
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
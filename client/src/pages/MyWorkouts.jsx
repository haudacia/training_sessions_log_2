import React from 'react'
import RoundNavlink from '../components/RoundNavlink'

function MyWorkouts() {
    return (
    <div>
      <h1>workout split</h1>
      <ul>
        <li>
          <h2>A - Legs</h2>
          <p>
            1. Front Squat
            2. Barbell Hip Thrust
            3. Feet Forward Smith Squat
            4. Dumbbell Split Squat
            Sunday: 3 sets, 5-10 reps
          </p>
        </li>
        <li>
          <h2>B - Active recovery</h2>
          <p>
            1. Stretching & Miofascial release
            Monday: 45min
          </p>
        </li>
        <li>
          <h2>A - Legs</h2>
          <p>
            1. Feet Forward Smith Squat 3 sets, 10-20 reps
            2. High Bar Squat (agachamento normal)
            3. Sumo Squat
            4.  Single Leg Hip Thrust
            4. Candlestick (5-10)
          </p>
          Tuesday: 3 sets, 10-20 reps
        </li>
        <li>
          <h2>A - Legs & Abs</h2>
          <p>
            1. Feet Forward Smith Squat
            2. Leg Press
            3. Dumbbell Split Squat
            Thursday: 3 sets, 20-30 reps
          </p>
        </li>
        <li>
          <h2>B - Upper body</h2>
          <p>
            1. Incline dumbbel row
            2. Dumbbell Incline Prone Reverse Fly
            3. Arnold press
            3. Pull ups
            5. Candlestick (5-10)

            Friday: 3 sets, 20-30 reps
          </p>
        </li>
      </ul>





    </div>
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

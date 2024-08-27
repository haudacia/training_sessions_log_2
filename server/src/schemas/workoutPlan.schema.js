import { Schema, model } from 'mongoose'
import exerciseDetails from './exerciseSchema';

const workoutPlanSchema = new Schema({
    'mesocycle': { type: Number },
    'startDate': Date,
    'duration': { //in weeks
        type: Number,
    },
    'endDate': Date, // to be calculared based on startDate and intended duration inputs
    'exercises': [exerciseDetails], // intended to store the information per exercise
    // (name, main target muscle, if uses barbell/dumbbell/bodyweight, etc)
    // to be continued
});

const workoutPlan = model('workoutPlan', workoutPlanSchema);

export default workoutPlan;
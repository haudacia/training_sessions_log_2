import { Schema, model } from "mongoose";

const exerciseDetailsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    'primaryTargetMuscle': String,
    'secondaryTargetMuscle': String

});

const exerciseDetails = model('exerciseDetails', exerciseDetailsSchema)

export default exerciseDetails;
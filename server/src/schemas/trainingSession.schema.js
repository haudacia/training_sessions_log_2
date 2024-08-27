import { response } from "express";
import { Schema, model } from "mongoose";
// import { datetime, timedelta } from datetime;

const trainingSessionSchema = new Schema({
  'exercises': [{
    'exercise': String, // replace by reference of corresponding model object
    // get only Name property
    'sets': [{
      // 'setCount': {type: Number, default: 1}, // register set count here or through the FE?
      'reps': { type: Number, require: true },
      'weightload': { type: Number, require: true }
    }]
  }],
  creationDateTime: {
    type: Date,
    default: new Date(),
    immutable: true
  },
  endDateTime: Date,
  duration: Number // milisseconds,
});

// trainingSessionSchema.pre('save', function (next) {
//   if (this.endDateTime && this.creationDateTime) {
//     this.duration = this.endDateTime - this.creationDateTime;
//   }
//   next();
// });

const trainingSession = model('trainingSession', trainingSessionSchema);

export default trainingSession;

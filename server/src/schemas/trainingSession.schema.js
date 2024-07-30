import { Schema, model } from "mongoose";
// import { datetime, timedelta } from datetime;

const trainingSessionSchema = new Schema({
  exercise: String,
  creationDateTime: {
    type: Date,
    default: new Date(),
    immutable: true
  },
  endDateTime: {
    type: Date,
    default: new Date("2024-07-31T17:08:00Z"),
  },
  duration: {
    type: Number, //miliseconds
    default: function () {
      this.endDateTime - this.creationDateTime
    }
  }
});

const trainingSession = model('trainingSession', trainingSessionSchema);

export default trainingSession
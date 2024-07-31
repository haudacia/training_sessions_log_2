import { Schema, model } from "mongoose";
// import { datetime, timedelta } from datetime;

const trainingSessionSchema = new Schema({
  exercise: String,
  creationDateTime: {
    type: Date,
    default: new Date(),
    immutable: true
  },
  endDateTime: Date,
  duration: Number // milissegundos
});

// trainingSessionSchema.pre('save', function (next) {
//   if (this.endDateTime && this.creationDateTime) {
//     this.duration = this.endDateTime - this.creationDateTime;
//   }
//   next();
// });

const trainingSession = model('trainingSession', trainingSessionSchema);

export default trainingSession;

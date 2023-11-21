import mongoose from "mongoose";
const feedbackSchema = new mongoose.Schema({
  ratings: {
    foodQuality: { type: Number, required: true },
    serviceQuality: { type: Number, required: true },
    overallExperience: { type: Number, required: true },
  },
  receiveFollowUp: { type: Boolean, required: true },
  recommendation: { type: String, enum: ['YES', 'NO'], required: true },
  suggestions: { type: String, required: true },
});


const FeedbackModel = new mongoose.model('Feedback', feedbackSchema);

export {FeedbackModel};

import { FeedbackModel } from "../model/feedbackModel.js";
export const feedbackCollectionCreate = async (values) => {
  try {
    const { foodQuality, serviceQuality, overallExperience } = values.ratings;
    const { receiveFollowUp, recommendation, suggestions } = values;
    const feedbackCollection = new FeedbackModel ({
      ratings: {
        foodQuality,
        serviceQuality,
        overallExperience,
      },
      receiveFollowUp,
      recommendation,
      suggestions,
    });
    await feedbackCollection.save();
    return feedbackCollection;
  } catch (error) {
    console.log(error);
  }
};

export const fecthCollection  = async()=>{
    try {
        const fecth = await FeedbackModel.find({})
        return fecth

    } catch (error) {
      console.log(error)  
    }
}
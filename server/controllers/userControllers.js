import { fecthCollection, feedbackCollectionCreate } from "../helper/userHelper.js"

export const formSubmition = async(req,res)=>{
    try {
        const value = req.body
      await feedbackCollectionCreate(value)
      res.status(200).json({ success: true });
    } catch (error) {
      console.log(err) 
    }
}

export const fetchfeedbackCollection = async(req,res)=>{
    try {
        const fetchData = await fecthCollection()
        res.json({ success: true, fetchData }).status(200);
    } catch (error) {
        console.log(error)
    }
}
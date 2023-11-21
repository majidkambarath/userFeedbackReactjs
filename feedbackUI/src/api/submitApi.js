import axiosInstance from "../axios/axios";

export const submitDataValues = async(values)=>{
    try {
        const sendSubmitRequest = await axiosInstance.post('/submitFrom',values)
         return sendSubmitRequest
    } catch (error) {
        console.log(error)
    }
}


export const fetchTheFeedback = async()=>{
    try {
        const fetchResponseData = await axiosInstance.get('/fetchfeedback')
         return fetchResponseData
    } catch (error) {
        console.log(error)
    }
}

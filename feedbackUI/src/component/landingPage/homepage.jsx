import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../navBar/navBar";
import LogoImg from "../../assets/logoImg.png";
import Carousel from "../../assets/Carousel.png";
import { FaChevronDown } from "react-icons/fa";
import { submitDataValues } from "../../api/submitApi";
import { toast } from "react-hot-toast";
// import RatingStars from "react-star-rating-component";
const stars = Array.from({ length: 5 }, (_, i) => i + 1);
export default function Homepage() {
    const navigate = useNavigate();
  const [ratings, setRatings] = useState({
    foodQuality: 0,
    serviceQuality: 0,
    overallExperience: 0,
  });
  const [recommendation, setRecommendation] = useState(null);
  const [receiveFollowUp, setReceiveFollowUp] = useState(false);
  const [suggestions, setSuggestions] = useState("");
  const handleRatingChange = (aspect, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [aspect]: rating,
    }));
  };
  const handleRecommendationChange = (value) => {
    setRecommendation(value);
  };

  const handleInputChange = (e) => {
    setSuggestions(e.target.value);
  };

  const handleCheckboxChange = () => {
    setReceiveFollowUp(!receiveFollowUp);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (receiveFollowUp) {
        const data = {
            ratings,
            receiveFollowUp,
            recommendation,
            suggestions
            
        }
        submitDataValues(data).then((res)=>{
           if(res.data.success){
            toast.success('Thanks for the feedback')
            navigate('/feedback')
           }
        }).catch((err)=>{
            console.log(err)
        })
        
    }
   
  };
  return (
    <>
      <NavBar />

      <div className="w-full">
        <div className="w-full">
          <img className="w-4/5 ml-8 -mt-10" src={LogoImg} alt="logo_img" />
        </div>
        <div className="">
          <img className="w-full mt-6" src={Carousel} alt="Carousel_img" />
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-Poppins text-2xl w-full font-bold mt-10">
            HELLO, THANKS FOR VISITING
          </h1>
          <h2 className="font-Poppins mt-3">
            Please help us improve our cafe services by filling in our feedback
            form. Thank you!
          </h2>
        </div>

        <div>
          <h1 className="font-Poppins text-1xl w-full font-bold mt-10">
            HOW OFTEN DO YOU VISIT HERE?
          </h1>
          <div className="w-full border-slate-300 border rounded-xl flex flex-row justify-between h-14 mt-3">
            <h1 className="ml-6 text-black/60  text-xl mt-[10px]">Regularly</h1>
            <h1 className="px-4 text-black/20 text-xl mt-4 cursor-pointer">
              <FaChevronDown />
            </h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div>
          <h1 className="font-Poppins text-2xl w-full font-bold mt-10">
            QUALITY OF THE FOOD
          </h1>
          <div className="mt-3">
            {stars.map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => handleRatingChange("foodQuality", star)}
                className={`${
                  star <= ratings.foodQuality
                    ? "text-yellow-300"
                    : "text-gray-400"
                } text-7xl mr-1`}
              >
                {"\u2605"}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-Poppins text-2xl w-full font-bold mt-10">
            SERVICE QUALITY
          </h1>
          <div className="mt-3">
            {stars.map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => handleRatingChange("serviceQuality", star)}
                className={`${
                  star <= ratings.serviceQuality
                    ? "text-yellow-300"
                    : "text-gray-400"
                } text-7xl mr-1`}
              >
                {"\u2605"}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-Poppins text-2xl w-full font-bold mt-10">
            OVERALL EXPERIENCE
          </h1>
          <div className="mt-3">
            {stars.map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => handleRatingChange("overallExperience", star)}
                className={`${
                  star <= ratings.overallExperience
                    ? "text-yellow-300"
                    : "text-gray-400"
                } text-7xl mr-1`}
              >
                {"\u2605"}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-Poppins text-2xl w-full font-bold mt-10">
            WOULD YOU RECOMMEND OUR RESTAURANT TO OTHERS?
          </h1>
          <div className="flex gap-10 ml-12 mt-4">
            <div className="inline-flex items-center justify-center">
              <label className="relative flex cursor-pointer items-center rounded-full p-3">
                <input
                  name="type"
                  type="radio"
                  required
                  checked={recommendation === "YES"}
                  onChange={() => handleRecommendationChange("YES")}
                  className="before:content[''] peer relative h-10 w-10 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label className="mt-px cursor-pointer text-2xl select-none font-bold font-Poppins text-gray-700/40">
                YES
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                for="react"
              >
                <input
                  name="type"
                  type="radio"
                  required
                  checked={recommendation === "NO"}
                  onChange={() => handleRecommendationChange("NO")}
                  className="before:content[''] peer relative h-10 w-10 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label className=" cursor-pointer text-2xl select-nonefont-bold font-Poppins text-gray-700/40">
                NO
              </label>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-Poppins text-2xl w-full font-bold mt-5">
            YOUR SUGGESTIONS TO IMPROVE{" "}
          </h1>
          <div className=" w-full h-40">
            <textarea
              className="w-full sm:w-2/3 h-40 sm:h-64 resize-x mt-4  rounded-md border text-2xl border-gray-900/50 p-5 font-Poppins"
              value={suggestions}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div>
          <div className="flex flex-row mt-3">
            <input
              className="w-5"
              type="checkbox"
              checked={receiveFollowUp}
              onChange={handleCheckboxChange}
            />
            <h1 className="font-Poppins text-1xl w-full font-bold mt-5">
              RECEIVE PERSONAL FOLLOW-UP TO YOUR FEEDBACK
            </h1>
          </div>
        </div>
        <button className="w-full rounded-xl mt-2 text-xl h-14 bg-red-600 text-white font-Poppins " type="submit">SUBMIT FEEDBACK</button>
        </form>
      </div>
    </>
  );
}

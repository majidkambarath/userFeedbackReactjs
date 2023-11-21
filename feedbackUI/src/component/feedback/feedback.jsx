import React, { useEffect, useState } from 'react'
import NavBar from '../navBar/navBar'
import { fetchTheFeedback } from '../../api/submitApi';
const stars = Array.from({ length: 5 }, (_, i) => i + 1);
export default function Feedback() {
const [collection,setCollection] = useState([])
console.log(collection)
      useEffect(()=>{

        const fetch = ()=>{
            fetchTheFeedback().then((res)=>{
                setCollection(res.data.fetchData)
            })
        }
        fetch()
      },[])
  return (
    <div>
      <NavBar/>

      {
        collection.map((data)=>{
            console.log(data)
            return(

   <div key={data._id} className='bg-slate-300/70 h-[300px] w-ful rounded-xl '>
        <div className='flex flex-row gap-5 mt-3 py-3'>
            <h1 className='mt-2 ml-5'> QUALITY OF THE FOOD</h1>
            <div>
            {stars.map((star) => (
              <button
                type="button"
                key={star}
                className={`${
                  star <= data.ratings.foodQuality
                    ? "text-yellow-300"
                    : "text-gray-400"
                } text-3xl mr-1`}
              >
                {"\u2605"}
              </button>
            ))}
            </div>
        </div>
        <div className='flex flex-row gap-5 mt-3 py-2'>
            <h1 className='mt-2 ml-5'>    SERVICE QUALITY</h1>
            <div>
            {stars.map((star) => (
              <button
                type="button"
                key={star}
                className={`${
                  star <= data.ratings.serviceQuality
                    ? "text-yellow-300"
                    : "text-gray-400"
                } text-3xl mr-1`}
              >
                {"\u2605"}
              </button>
            ))}
            </div>
        </div>
        <div className='flex flex-row gap-5 mt-3 py-2'>
            <h1 className='mt-2 ml-5'> OVERALL EXPERIENCE</h1>
            <div>
            {stars.map((star) => (
              <button
                type="button"
                key={star}
                className={`${
                  star <= data.ratings.overallExperience
                    ? "text-yellow-300"
                    : "text-gray-400"
                } text-3xl mr-1`}
              >
                {"\u2605"}
              </button>
            ))}
            </div>
        </div>

        <div className='mt-6'>
            <h1 className='text-xl font-Poppins'>suggestions</h1>
            <h1 className='text-xl font-Poppins'>{data.suggestions}</h1>
        </div>
   </div> 
            )
        })
      }
    </div>
  )
}

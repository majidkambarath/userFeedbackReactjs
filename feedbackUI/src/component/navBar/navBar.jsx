import React from 'react'
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div className='w-full h-24 '>
        <div className='flex flex-row justify-center gap-7 font-Poppins '>
            <NavLink to={'/'}  >
            <h1 className='transition text-2xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: text-blue-600 duration-300'>Home</h1>
            </NavLink>
            <NavLink to={'/feedback'}>
            <h1 className='transition  text-2xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: text-blue-600 duration-300'>Feedback</h1>
            </NavLink>
        </div>
    </div>
  )
}

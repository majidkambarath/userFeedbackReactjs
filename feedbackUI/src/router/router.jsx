import React from 'react'
import { Route, Routes } from "react-router-dom";
import LandingPage from '../pages/landingPage'
import FeedbackPage from '../pages/feedbackPage';
export default function Router() {
  return (
    <Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/feedback" element={<FeedbackPage />} />
    </Routes>
  )
}

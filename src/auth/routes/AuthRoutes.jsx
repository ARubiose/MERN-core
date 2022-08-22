import React from 'react'
import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RegisterPage, LoginPage } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>
        
        <Route path="login" element={ <Suspense><LoginPage/></Suspense> }/>
        {/* Register page not used in this design */}
        <Route path="register" element={ <Suspense><RegisterPage/></Suspense> }/>

        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}

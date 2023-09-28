import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { UserPage } from './pages/UserPage'
import { NotFound } from './pages/NotFound'
import { NavBar } from './components/NavBar'

// PUEDE RENOMBRARLO CON EL AS

export const App = () => {

  return (
    <>
<BrowserRouter>
<NavBar />
<Routes>
<Route path='/' element={<HomePage />} />
<Route path='/About' element={<AboutPage />} />
<Route path='/UserPage' element={<UserPage />} />
<Route path='/*' element={<NotFound />} />
</Routes>

</BrowserRouter>
    </>
  )
}


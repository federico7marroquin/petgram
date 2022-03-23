import React, { Suspense } from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { RequireAuth } from './hoc/RequireAuth'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theming'

const Favs = React.lazy(() => import('./pages/Favs'))
const Detail = React.lazy(() => import('./pages/Detail'))
const User = React.lazy(() => import('./pages/User'))
const Login = React.lazy(() => import('./pages/Login'))
const Register = React.lazy(() => import('./pages/Register'))

export const App = () => {

  return (
      <Suspense fallback={<div/>}>
        <GlobalStyle />
        <BrowserRouter>
          <Logo />
          <ThemeProvider theme={theme}>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/pet/:id' element={<Home />} />
              <Route path='/detail/:id' element={<Detail />} />
              <Route path='/favs' element={<RequireAuth><Favs /></RequireAuth>} />
              <Route path='/user' element={<RequireAuth><User /></RequireAuth>} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ThemeProvider>
          <NavBar />
        </BrowserRouter>
      </Suspense>
  )
}
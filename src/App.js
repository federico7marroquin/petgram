import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { RequireAuth } from './hoc/RequireAuth'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theming'
export const App = () => {

  return (
    <div>
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
          </Routes>
        </ThemeProvider>
        <NavBar />
      </BrowserRouter>
    </div>
  )
}
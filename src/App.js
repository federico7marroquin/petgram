import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { RequireAuth } from './hoc/RequireAuth'

export const App = () => {

  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Logo />{
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/pet/:id' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favs' element={<RequireAuth><Favs/></RequireAuth>}/>
            <Route path='/user' element={<RequireAuth><User/></RequireAuth>} />
            <Route path='/register' element={<NotRegisterUser />} />
          </Routes>
        }
        <NavBar />
      </BrowserRouter>
    </div>
  )
}
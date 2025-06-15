import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Cadastro } from './pages/cadastro'
import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard'
import { MainLayout } from './layouts/MainLayout'
import { Equipe } from './pages/Equipe'
import { Sobre } from './pages/sobre'

function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          {/* Rotas principais que terão o Menu principal. */}
          <Route element={<MainLayout />}>
            <Route index path='/' element={<Home />}></Route>
            <Route path='/equipe' element={<Equipe />}></Route>
            <Route path='/sobre' element={<Sobre />}></Route>
          </Route>
          {/* Rotas que são para autenticação ou a exigem. */}
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/cadastro' element={<Cadastro />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default AppRoutes;

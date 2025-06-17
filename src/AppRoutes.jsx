import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { MainLayout } from './layouts/MainLayout'
import { Equipe } from './pages/Equipe'
import { Sobre } from './pages/Sobre'
import { Cadastro } from './pages/Cadastro'
import { PrivateRoute } from './components/PrivateRoute'
import { DashboardLayout } from './layouts/DashboardLayout'

function AppRoutes() {

  return (
    <>
      <Router>
        <Routes>
          {/* Rotas principais que terão o Menu principal. */}
          <Route element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path='equipe' element={<Equipe />}></Route>
            <Route path='sobre' element={<Sobre />}></Route>
          </Route>
          {/* Rotas que são para autenticação ou a exigem. */}
          <Route path='dashboard' element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
            <Route index element={<Dashboard />}></Route>
            <Route path='perfil' element={<>Perfil</>}></Route>
          </Route>
          <Route path='/cadastro' element={<Cadastro />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default AppRoutes;

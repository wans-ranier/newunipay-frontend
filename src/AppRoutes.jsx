import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/home'
import { Cadastro } from '@/pages/cadastro'
import { Login } from '@/pages/login'
import { Dashboard } from '@/pages/dashboard'
import { HeaderComponent } from './styles'
import { UnsortedList, LinkItem } from './styles'

function AppRoutes() {

  return (
    <>
      <Router>

        <UnsortedList>
          <LinkItem>
            <Link to='/'>Home</Link>
          </LinkItem>
          <LinkItem>
            <Link to='/dashboard'>Dashboard</Link>
          </LinkItem>
          <LinkItem>
            <Link to='/cadastro'>Cadastro</Link>
          </LinkItem>
          <LinkItem>
            <Link to='/login'>Login</Link>
          </LinkItem>

        </UnsortedList>

        <HeaderComponent>
          <h1>Unipay Visual</h1>
          <p>Visualização de dados do Unipay</p>
        </HeaderComponent>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cadastro' element={<Cadastro />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;

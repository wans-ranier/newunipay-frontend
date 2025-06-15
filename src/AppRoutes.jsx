import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from '@/pages/home'
import { Cadastro } from '@/pages/cadastro'
import { Login } from '@/pages/login'
import { Dashboard } from '@/pages/dashboard'
import { UnsortedList, LinkItem } from './styles'
import '@/assets/css/bubbleStyles.css'

function AppRoutes() {

  return (
    <>
      <Router>
        <UnsortedList>
          <LinkItem className='LinkPai'>
            <Link className='LinkRouter' to='/'>Home</Link>
            <span></span><span></span><span></span><span></span><span></span>
          </LinkItem>
          <LinkItem className='LinkPai'>
            <Link className='LinkRouter' to='/dashboard'>Dashboard</Link>
            <span></span><span></span><span></span><span></span><span></span>
          </LinkItem>
          <LinkItem className='LinkPai'>
            <Link className='LinkRouter' to='/cadastro'>Cadastro</Link>
            <span></span><span></span><span></span><span></span><span></span>
          </LinkItem>
          <LinkItem className='LinkPai'>
            <Link className='LinkRouter' to='/login'>Login</Link>
            <span></span><span></span><span></span><span></span><span></span>
          </LinkItem>
        </UnsortedList>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cadastro' element={<Cadastro />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default AppRoutes;

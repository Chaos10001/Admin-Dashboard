import { useState } from 'react'
import DashBoard from './pages/Dashboard'
import './assets/scss/app.scss'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import Header from './component/Layout/Header'
import Footer from './component/Layout/Footer'
import SidebarContainer from './component/Layout/SidebarContainer'
import { MenuContext } from './context/Menu'
import { useContext } from 'react'
import Users from './pages/Users'

function App() {
  library.add(fas);
  const [count, setCount] = useState(0);
  const [{menuClass}] = useContext(MenuContext)

  return(
    <Router >
      <div className={menuClass}>
        <Header/>
        <SidebarContainer/>
        <div className="main-content ">
          <div className="page-content">
            <Switch>
              <Route exact path='/'>
                <DashBoard/>
              </Route>
              <Route path='/users'>
                <Users/>
              </Route>
            </Switch>
          </div>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}
export default App
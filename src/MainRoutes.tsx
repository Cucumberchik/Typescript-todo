
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Admin from './components/pages/Admin'

export default function MainRoutes() {
    let Link = [
        {path: "/admin", component: <Admin/>},
        {path: "/", component: <Home/>}
    ]
    
  return (
    <Routes>
        {Link.map((el, id:number)=>(
            <Route path={el.path} element={el.component} key={id} />
        ))}
    </Routes>
  )
}

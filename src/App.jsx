import { Routes , Route } from 'react-router-dom'
import Router from './constants/router/index'
import Setting from './pages/setting/index'
import Home from './pages/home/index'
import Product from './pages/productPage/index'

const App = () => {
  return (
    <>
      <Routes>
        <Route path={Router.home} element={<Home />} />
        <Route path={Router.setting} element={<Setting />} />
        <Route path={Router.product} element={<Product />} />
      </Routes>
    </>
  )
}

export default App
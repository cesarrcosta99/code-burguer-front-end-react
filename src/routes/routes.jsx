import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Home, Product, Register, Cart } from '../containers'
import PrivateRoute from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/produtos"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path="/carrinho"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default MyRoutes

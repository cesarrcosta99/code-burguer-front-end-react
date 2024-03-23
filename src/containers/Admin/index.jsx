import { Container } from './styles'
import { useLocation } from 'react-router-dom'
import paths from '../../constants/path'
import { Orders } from './Orders'
import ProductList from './ProductList'
import EditProduct from './EditProduct'
import { MenuLateral } from '../../components'
import AddProduct from './AddProduct/index'

export function Admin() {
  const { pathname } = useLocation()

  return (
    <Container>
      <MenuLateral />
      <div style={{ padding: '20px', width: '100%' }}>
        {pathname === paths.Order && <Orders />}
        {pathname === paths.Product && <ProductList />}
        {pathname === paths.AddProduct && <AddProduct />}
        {pathname === paths.EditProduct && <EditProduct />}
      </div>
    </Container>
  )
}

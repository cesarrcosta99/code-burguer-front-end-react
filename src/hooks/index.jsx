import { UserProvider } from './UserContext'
import { CartProvider } from './CartContext'
import PropTypes from 'prop-types'

export const AppProvider = ({ children }) => (
  <CartProvider>
    <UserProvider>{children}</UserProvider>
  </CartProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node
}

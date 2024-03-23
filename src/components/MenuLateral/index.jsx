import { Container, OrganizeOrders, LinkItem } from './styles'
import { useLocation } from 'react-router-dom'
import { ListaMenu } from './ListaMenu/listMenu.jsx'
import LogoutIcon from '@mui/icons-material/Logout'

export function MenuLateral() {

  const {pathname}=useLocation()

  const handleLogout = () => {
    localStorage.removeItem('codeBurguer:user')
  }

  return (
    <Container>
      <hr></hr>
      {ListaMenu.map(item => (
        <OrganizeOrders key={item.id} bordaativo={pathname ===item.link}>
          <img src={item.img} />
          <LinkItem to={item.link}>{item.label}</LinkItem>
        </OrganizeOrders>
      ))}
      <hr></hr>

      <OrganizeOrders style={{position:'fixed',bottom:'25px'}}>
        <LogoutIcon />
        <LinkItem to="/login" onClick={handleLogout}>
          Sair
        </LinkItem>
      </OrganizeOrders>
    </Container>
  )
}

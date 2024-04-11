import { Container, LinkPages, Divisao, NumeroCarrinho } from './styles'
import Carrinho from '../../assets/Carrinho.png'
import Pessoa from '../../assets/Pessoa.png'
import { useNavigate, useLocation } from 'react-router-dom'
import { UseUser } from '../../hooks/UserContext'
import { UseCart } from '../../hooks/CartContext'

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const {
    userData: { name }
  } = UseUser()
  const { cartProducts } = UseCart()

  const handleLogout = () => {
    localStorage.removeItem('codeBurguer:user')

    navigate('/login')
  }

  return (
    <Container>
      <div className="primeiro-container">
        <LinkPages
          onClick={() => navigate('/')}
          isActive={location.pathname === '/'}
        >
          Home
        </LinkPages>
        <LinkPages
          onClick={() => navigate('/produtos')}
          isActive={location.pathname.includes('produtos')}
        >
          Ver produtos
        </LinkPages>
      </div>

      <div className="segundo-container">
        <LinkPages onClick={() => navigate('/carrinho')}>
          <img
            src={Carrinho}
            alt="icone-carrinho"
            style={{ width: '1.690rem' }}
          />
          {cartProducts.length > 0 && (
            <NumeroCarrinho>{cartProducts.length}</NumeroCarrinho>
          )}
        </LinkPages>
        <Divisao></Divisao>
        <LinkPages>
          <img src={Pessoa} alt="icone=pessoa" />
        </LinkPages>

        <div className="terceiro-container">
          <p style={{ fontWeight: 300 }}>Olá, {name}</p>
          <LinkPages
            onClick={handleLogout}
            style={{ fontWeight: 700, color: '#9758A6' }}
          >
            Sair
          </LinkPages>
        </div>
      </div>
    </Container>
  )
}

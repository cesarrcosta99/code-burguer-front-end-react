import { Container, Header, Body, SemCarrinho, ImagemVazio,Lixeira } from './styles'
import { UseCart } from '../../hooks/CartContext'
import formatValue from '../../utils/formatValue'
import CarrinhoVazio from '../../assets/Carrinho Vazio.png'
import LixeiraCarrinho from '../../assets/Lixeira.png'

export function CartItems() {
  const { cartProducts,changeQuantity,deleteItem } = UseCart()

  return (
    <Container center={cartProducts.length === 0}>
      <Header>
        <p></p>
        <p style={{ paddingLeft: 14 }}>Itens</p>
        <p style={{ paddingLeft: 27 }}>Preço</p>
        <p>Quantidade</p>
        <p style={{ paddingLeft: 13 }}>Total</p>
        <p></p>
      </Header>

      {cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p style={{width:160}}>{product.name}</p>
            <p style={{ paddingLeft: 18, fontWeight: 500 }}>
              {formatValue(product.price)}
            </p>
            <div className="quantidade-botao">
              <button onClick={()=>changeQuantity(product.id,'menos')}>-</button>
              <p style={{ fontWeight: 500 }}>{product.quantity}</p>
              <button onClick={()=>changeQuantity(product.id,'mais')}>+</button>
            </div>
            <p style={{ paddingLeft: 9, fontWeight: 500 }}>
              {formatValue(product.price * product.quantity)}
            </p>
            <Lixeira onClick={()=>deleteItem(product.id)}><img src={LixeiraCarrinho}/></Lixeira>
          </Body>
        ))
      ) : (
        <>
          <SemCarrinho>Carrinho vazio</SemCarrinho>
          <ImagemVazio src={CarrinhoVazio} />
        </>
      )}
    </Container>
  )
}

import { Container } from './styles'
import { Button } from '../Button'

export function CartResume() {
  return (
    <div>
      <Container>
        <div className="grid">
          <h1 className="header">Resumo do pedido</h1>
          <p className="itens">Itens</p>
          <p className="valor">R$ 30,00</p>
          <p className="taxa">Taxa de entrega</p>
          <p className="valordois">R$ 5,00</p>
        </div>
        <div className="flex">
          <p>Total</p>
          <p>R$ 98,70</p>
        </div>
      </Container>
      <Button style={{ width: '100%', height: 46.13 }}>Finalizar pedido</Button>
    </div>
  )
}

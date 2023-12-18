import { Container } from './styles'
import { Button } from '../Button'
import { UseCart } from '../../hooks/CartContext'
import formatValue from '../../utils/formatValue'
import { apiCodeBurguer } from '../../services/api'
import {toast} from 'react-toastify'

export function CartResume() {
  const { totalItens,cartProducts } = UseCart()

  const sendOrders=async()=>{

    const order=cartProducts.map(produto=>{
      return {
        id:produto.id,
        quantity:produto.quantity
      }
    })
    console.log(order)

      await toast.promise(
        apiCodeBurguer.post('orders',{products:order}),
        {
          pending:'Realizando o seu pedido',
          success:'Pedido realizado com sucesso',
          error:'Falha ao tentar realizar o seu pedido,tente novamente'
        }
      )
  }

  return (
    <div>
      <Container>
        <div className="grid">
          <h1 className="header">Resumo do pedido</h1>
          <p className="itens">Itens</p>
          <p className="valor">{formatValue(totalItens)}</p>
          <p className="taxa">Taxa de entrega</p>
          <p className="valordois">{formatValue(5)}</p>
        </div>
        <div className="flex">
          <p>Total</p>
          <p>{formatValue(totalItens + 5)}</p>
        </div>
      </Container>
      <Button onClick={sendOrders} style={{ width: '100%', height: 46.13 }}>Finalizar pedido</Button>
    </div>
  )
}

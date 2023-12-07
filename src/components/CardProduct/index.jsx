import { Container,Img,NomeProduto,PrecoProduto } from "./styles"
import { UseCart } from "../../hooks/CartContext"
import {Button} from "../Button"
import PropTypes from "prop-types"

export function CardProduct({ produto }) {
    const {putCart}=UseCart()

  return (
    <Container>

      <Img src={produto.url} alt="imagem do produto" />
      <div>
      <NomeProduto>{produto.name}</NomeProduto>
      <PrecoProduto>{produto.formatPrice}</PrecoProduto>
      <Button onClick={()=>putCart(produto)}>Adicionar</Button>
      </div>

    </Container>
  )
}



CardProduct.propTypes={
    produto:PropTypes.object
}

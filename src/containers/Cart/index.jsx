import { Imagem,Container,WrapContainer } from "./styles";
import ImagemCart from '../../assets/Imagem-Carrinho.png'
import { CartItems,CartResume } from "../../components";
import { UseCart } from "../../hooks/CartContext";

export function Cart(){
    const {cartProducts}=UseCart()

    return ( 
    <Container>
    <Imagem src={ImagemCart} alt='imagem'/>
    <WrapContainer>
    <CartItems/>
    {cartProducts.length > 0 && <CartResume/>}
    </WrapContainer>
    </Container>
    )
}
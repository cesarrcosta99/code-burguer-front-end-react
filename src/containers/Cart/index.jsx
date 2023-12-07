import { Imagem,Container,WrapContainer } from "./styles";
import ImagemCart from '../../assets/Imagem-Carrinho.png'
import { CartItems,CartResume } from "../../components";

export function Cart(){
    return ( 
    <Container>
    <Imagem src={ImagemCart} alt='imagem'/>
    <WrapContainer>
    <CartItems/>
    <CartResume/>
    </WrapContainer>
    </Container>
    )
}
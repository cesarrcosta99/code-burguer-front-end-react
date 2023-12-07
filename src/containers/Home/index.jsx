import { Container, Imagem } from './styles'
import ImagemHome from '../../assets/Imagem-Home.png'
import {CategoryCarrosel,OfferCarrosel} from '../../components'


export function Home() {
  return (
    <Container>
      <Imagem src={ImagemHome} alt="imagem home" />
      <CategoryCarrosel />
      <OfferCarrosel />
    </Container>
  )
}



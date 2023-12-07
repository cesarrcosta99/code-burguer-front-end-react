import { useEffect, useState } from 'react'
import { apiCodeBurguer } from '../../services/api'
import Carousel from 'react-elastic-carousel'
import formatValue from '../../utils/formatValue'
import {
  Container,
  Image,
  Item,
  Button,
  SecondContainer,
  Price,
  NameLanche
} from './styles'
import LetraOffer from '../../assets/Letra-OFERTAS.png'

export function OfferCarrosel() {
  const [offer, setOffer] = useState([])

  useEffect(() => {
    async function RenderOffer() {
      const { data } = await apiCodeBurguer.get('products')

      const productOffer = data.filter(item => item.offer).map(product=>{
        return (
          {...product,
            formatCurrency:formatValue(product.price)
          }
        )
      })

      setOffer(productOffer)
    }
    RenderOffer()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <Image src={LetraOffer} alt="letra-offer" />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
        pagination={false}
      >
        {offer.map(produtos => (
          <SecondContainer key={produtos.id}>
            <Item src={produtos.url} alt="imagem" />
            <NameLanche>{produtos.name}</NameLanche>
            <Price>{produtos.formatCurrency}</Price>
            <Button>Peça agora</Button>
          </SecondContainer>
        ))}
      </Carousel>
    </Container>
  )
}
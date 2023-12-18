import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import LetraCategory from '../../assets/letra-categorias.png'
import { Container, Image, Item, Button, SecondContainer } from './styles'
import { apiCodeBurguer } from './../../services/api'
import { useNavigate } from 'react-router-dom'

export function CategoryCarrosel() {
  const [categories, setCategories] = useState([])
  const navigate=useNavigate()

  useEffect(() => {
    async function RenderCategory() {
      const { data } = await apiCodeBurguer.get('categories')
      setCategories(data)
    }
    RenderCategory()
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
      <Image src={LetraCategory} alt="letra-category" />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        pagination={false}
        breakPoints={breakPoints}
      >
        {categories.map(categorias => (
          <SecondContainer key={categorias.id}>
            <Item src={categorias.url} alt="imagem" />
            <Button onClick={() => navigate('/produtos', { state: { categoryId: categorias.id } })}>{categorias.name}</Button>
          </SecondContainer>
        ))}
      </Carousel>
    </Container>
  )
}

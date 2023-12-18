import {
  Container,
  Imagem,
  ButtonCategory,
  SelectCategory,
  ShowProduct
} from './styles'
import ImagemProduct from '../../assets/logo-produtos.png'
import { apiCodeBurguer } from '../../services/api'
import formatValue from '../../utils/formatValue'
import {CardProduct} from '../../components'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function Product() {

  const {state} = useLocation()

  let idCategory=0
  if(state?.categoryId){
    idCategory=state.categoryId
  }
  
  


  const [categories, setCategories] = useState([])
  const [product, setProduct] = useState([])
  const [filterProduct, setFilterProduct] = useState([])
  const [activeCategory, setActiveCategory] = useState(idCategory)

  
  

  useEffect(() => {
    async function loadCategory() {
      const { data } = await apiCodeBurguer.get('categories')

      const categoryComTodos = [{ id: 0, name: 'Todos' }, ...data]
      setCategories(categoryComTodos)
    }

    async function loadProducts() {
      const { data: allProduct } = await apiCodeBurguer.get('products')
      const TodosProdutos = allProduct.map(product => ({
        ...product,
        formatPrice: formatValue(product.price)
      }))
      setProduct(TodosProdutos)
    }

    loadProducts()
    loadCategory()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProduct(product)
    } else {
      const newProduct = product.filter(
        product => product.category_id === activeCategory
      )
      setFilterProduct(newProduct)
    }
  }, [activeCategory, product])


  return (
    <Container>
      <Imagem src={ImagemProduct} alt="imagem home" />
      <SelectCategory>
        {categories &&
          categories.map(categorias => (
            <ButtonCategory
              key={categorias.id}
              activoClick={activeCategory === categorias.id}
              onClick={() => setActiveCategory(categorias.id)}
            >
              {categorias.name}
            </ButtonCategory>
          ))}
      </SelectCategory>

      <ShowProduct>
        {filterProduct.map(produto => (
          <CardProduct key={produto.id} produto={produto} />
        ))}
      </ShowProduct>
    </Container>
  )
}



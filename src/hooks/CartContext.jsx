import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage=product=>{
    localStorage.setItem('codeburguer:cart',JSON.stringify(product))
  }

  const putCart = product => {
    const indexProduct = cartProducts.findIndex(
      produto => produto.id === product.id
    )
    let newProduct = []
    if (indexProduct >= 0) {
      newProduct = cartProducts
      newProduct[indexProduct].quantity++
      setCartProducts(newProduct)
    } else {
      product.quantity = 1
      newProduct = [...cartProducts, product]
      setCartProducts(newProduct)
    }

   updateLocalStorage(newProduct)
  }

  const changeQuantity = (productId, signal) => {
    const updateQuantity = cartProducts.map(produto => {
      if (produto.id === productId) {
        if (signal === 'mais') {
          return { ...produto, quantity: produto.quantity + 1 }
        } else if (signal === 'menos' && produto.quantity > 1) {
          return { ...produto, quantity: produto.quantity - 1 }
        }
      }
      return produto
    })

    setCartProducts(updateQuantity)
    updateLocalStorage(updateQuantity)
  }

  const deleteItem=productId=>{
    /* const filterItem=cartProducts.filter(produto=>produto.id !== productId)
    console.log(filterItem) */

    const filterItem=cartProducts.findIndex(produto=>produto.id === productId)

    if(filterItem !==-1) {
      cartProducts.splice(filterItem,1)
      console.log(cartProducts)

      setCartProducts([...cartProducts])
      updateLocalStorage(cartProducts)
    }
    
    


  }

  useEffect(() => {
    const produto = localStorage.getItem('codeburguer:cart')

    if (produto) {
      setCartProducts(JSON.parse(produto))
    }
  }, [])

  return (
    <CartContext.Provider value={{ putCart, cartProducts, changeQuantity,deleteItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const UseCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('Contexto não funcionando')
  }
  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}

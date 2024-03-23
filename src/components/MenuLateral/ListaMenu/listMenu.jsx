import IconeProdutos from '../../../assets/Icone-produto.png'
import Paths from '../../../constants/path'
import IconePedidos from '../../../assets/Icone-pedido.png'
import AddProduct from '../../../assets/AddProduct.png'

export const ListaMenu=[
    {
        id:1,
        label:'Pedidos',
        link:Paths.Order,
        img:IconePedidos
    },
    {
        id:2,
        label:'Produtos',
        link:Paths.Product,
        img:IconeProdutos
    },
    {
        id:3,
        label:'Adicionar Produto',
        link:Paths.AddProduct,
        img:AddProduct
    }

]

import { useEffect, useState } from 'react'
import { Imagem, Edit } from './styles'
import { apiCodeBurguer } from './../../../services/api'
import formatValue from '../../../utils/formatValue'
import Table from '@mui/material/Table'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CancelIcon from '@mui/icons-material/Cancel'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'
import paths from './../../../constants/path'

function ProductList() {
  const [listProducts, setListProducts] = useState([])
  const [row, setRow] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    async function loadProduct() {
      const { data } = await apiCodeBurguer.get('products')
      const newProduct = data.map(product => {
        return { ...product, newPrice: formatValue(product.price) }
      })
      setListProducts(newProduct)
    }
    loadProduct()
  }, [])

  function createData(product) {
    return {
      id: product.id,
      name: product.name,
      category:product.category,
      price: product.newPrice,
      offer: product.offer ? true : false,
      url: product.url
    }
  }

  useEffect(() => {
    const rows = listProducts.map(produto => createData(produto))
    console.log(rows)
    setRow(rows)
  }, [listProducts])

  function editarProduto(row) {
    navigate(paths.EditProduct, { state: { row } })
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Produto em Oferta</TableCell>
            <TableCell align="center">Imagem</TableCell>
            <TableCell>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row &&
            row.map(row => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell align="center">
                  {row.offer ? <CheckBoxIcon style={{ color: '#228B22' }}  /> : <CancelIcon style={{ color: '#CC1717' }} />}
                </TableCell>
                <TableCell align="center">
                  <Imagem src={row.url} alt="imagem-produto" />
                </TableCell>
                <TableCell align="center">
                  <Edit onClick={() => editarProduto(row)} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductList

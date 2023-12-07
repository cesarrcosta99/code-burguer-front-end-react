function formatValue(money) {
   return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(money)
}

export default formatValue

import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
  width: 315px;
  height: 301px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
  margin-bottom: 24px;
  padding-left: 24px;
  padding-top: 33px;
  .flex{
    display:flex;
    gap:140px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight:500; 
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 22px;
    grid-column-gap: 47px;
    grid-template-areas:
      'header header'
      'itens valor'
      'taxa  valordois';

    .header {
      grid-area: header;
    }

    .itens {
      grid-area: itens;
    }

    .valor {
      grid-area: valor;
      margin-left: 25px;
    }

    .taxa {
      grid-area: taxa;
    }

    .valordois {
      grid-area: valordois;
      margin-left: 35px;
    }

    h1 {
      color: #222;
      font-size: 15px;
      font-weight: 700;
      line-height: normal;
    }

    p {
      color: #222;
      font-size: 15px;
      font-weight: 300;
    }
  }
`

export const Paragrafo = styled.p``

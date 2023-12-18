import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  filter: drop-shadow(0px 10px 40px rgba(0, 0, 0, 0.03));
  width:max-content;
  border-radius: 20px;
  padding: 20px;
  margin-bottom:150px;

  ${props=>props.center && `
    position: relative;
    left: 197px;
  `}
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 25px;
  border-bottom: 2px solid #b5b5b5;
  padding-bottom: 20px;
  margin-bottom: 15px;

  p {
    color: #9a9a9d;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 25px;
  padding: 10px;
  width: max-content;
  grid-column-gap: 7px;

  img {
    width: 152px;
    height: 167px;
    border-radius: 10px;
  }

  p {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  .quantidade-botao{
    display:flex;
    align-items:start;
    gap:20px;

    button{
      background:transparent;
      border:none;
      font-size:27px;
      position:relative;
      bottom:7px;
      cursor:pointer;
    }

    p{
      font-size: 18px;
      font-weight: 500;
    }
  }
`

export const SemCarrinho = styled.p`
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  margin-top: 37px;
`

export const ImagemVazio=styled.img`
    width: 120px;
    margin-left: 140px;
`

export const Lixeira=styled.button`
  border:none;
  background:transparent;
  cursor:pointer;
  margin-bottom: 75px;
    position: relative;
    bottom: 37px;
    left: -23px;

  img{
    width:70px;
    height:70px;
  }

`

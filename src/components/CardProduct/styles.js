import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  display: flex;
  gap: 12px;
  background: #ffffff;
  box-shadow: 0px 30px 60px 0px #3939391a;
  padding: 12px;
  border-radius:30px;
  width:max-content;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Img = styled.img`
  width: 185px;
  border-radius: 16px;

  @media screen and (${breakpoints.sm}) {
    width: 16px;
  }
`

export const NomeProduto = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 19px;
  letter-spacing: 0em;
  color: #000000;
`

export const PrecoProduto = styled.p`
  margin-top: 27px;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: #000000;
`

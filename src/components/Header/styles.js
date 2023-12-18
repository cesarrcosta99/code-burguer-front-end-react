import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 72px;

  .primeiro-container {
    display: flex;
    gap: 35px;
    margin-left: 261px;
  }

  .segundo-container {
    display: flex;
    align-items: center;
    margin-left: 693px;
    gap: 20px;
  }

  .terceiro-container {
    display: flex;
    flex-direction: column;

    p {
      font-size: 14px;
      font-weight: 300;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      color: #555555;
    }
  }
`

export const LinkPages = styled.a`
  cursor: pointer;
  color: ${props => (props.isActive ? '#9758A6' : '#555555')};
  text-decoration: none;
  font-size: 16px;
  font-weight: ${props => (props.isActive ? 700 : 400)};
  line-height: 19px;

  
`

export const Divisao = styled.div`
  height: 40px;
  border-right: 0.5px solid #bababa;
`

export const NumeroCarrinho=styled.p`
  position: absolute;
    margin-top: -42px;
    margin-left: 10px;
    font-size: 18px;
    color: #f08804;
    font-weight: 700;
`

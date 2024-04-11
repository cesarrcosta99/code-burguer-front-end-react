import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 72px;

  .primeiro-container {
    display: flex;
    gap: 35px;
    margin-left: 261px;

    @media screen and (${breakpoints.sm}){
      margin-left:32px;
    }
  }

  .segundo-container {
    display: flex;
    align-items: center;
    margin-left: 693px;
    gap: 20px;

    @media screen and (${breakpoints.sm}){
      margin-left:36px;
      gap:10px;

      img{
        width:1.690rem;
      }
    }

    
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
      max-width: 105px;
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

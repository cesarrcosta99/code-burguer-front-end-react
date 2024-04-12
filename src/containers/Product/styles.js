import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 72px);
`

export const Imagem = styled.img`
  width: 100%;
`

export const SelectCategory = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 10px;

  @media screen and (${breakpoints.sm}) {
    justify-content:none;
    gap:6px;
  }
`

export const ButtonCategory = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.activoClick && '2px solid #9758A6'};
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => (props.activoClick ? '#9758A6' : '#9A9A9D')};
  padding-bottom: 5px;

  @media screen and (${breakpoints.sm}) {
    font-size: 16px;
  }
`

export const ShowProduct = styled.div`    
  padding:50px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;
  justify-items:center;

  @media screen and (${breakpoints.sm}) {
    grid-template-columns:repeat(1,1fr);
    gap:28px;
  }
`

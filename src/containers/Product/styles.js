import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height:100vh;
  
`

export const Imagem = styled.img`
  width: 100%;
`

export const SelectCategory = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 10px;
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
  padding-bottom:5px;
`

export const ShowProduct=styled.div`    
  padding:50px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;
  justify-items:center;
`

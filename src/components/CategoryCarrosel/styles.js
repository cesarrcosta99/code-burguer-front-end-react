import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  background: #efefef;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    box-shadow: 0px 4px 4px 0px #00000040;
  }

  .rec.rec-arrow:hover {
    border: 1px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    background-color: #bebebf;
    color: #efefef;
  }
`

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Image = styled.img`
  margin-bottom: 32px;
  width: 400px;

  @media screen and (${breakpoints.sm}) {
    width: 340px;
  }
`

export const Item = styled.img`
  border-radius: 10px;
  width: 194px;
  height: 212px;
`

export const Button = styled.button`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9758a6;
  margin-bottom: 35px;
  width: 193px;
  height: 53px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

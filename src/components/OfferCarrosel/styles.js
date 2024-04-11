import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

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
  border: none;
  margin-bottom: 32px;
  width: 250px;
`

export const Item = styled.img`
  border-radius: 10px;
  width: 194px;
  height: 212px;
`

export const Price = styled.p`
  color: #212121;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`

export const NameLanche = styled.p`
  color: #424242;
  font-size: 17px;
  font-weight: 500;
  line-height: 26px;
`

export const Button = styled.button`
  background: #9758a6;
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

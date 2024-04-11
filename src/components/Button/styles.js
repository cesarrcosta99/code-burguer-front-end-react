import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Button = styled.button`
  background: #9758a6;
  width: 182.81px;
  height: 36.13px;
  padding: 8px;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: #eeeeee;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media ${breakpoints.bg}{
    margin-top: -1px;
    margin-bottom: 8px;
  }

  @media ${breakpoints.md}{
    width: 165.81px;
  }
`

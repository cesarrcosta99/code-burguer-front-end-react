import styled from 'styled-components'
import Background from '../../assets/Background.png'
import breakpoints from './../../styles/breakpoints'

export const Container = styled.div`
  background: url('${Background}');
  height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 90%;

  @media screen and (${breakpoints.bg}) {
    height: 78%;
  }

  @media screen and (${breakpoints.md}) {
    height: 68%;
  }

  @media screen and (${breakpoints.sm}){
    height:0;
  }
`

export const SecondContainer = styled.div`
  background: #373737;
  height: 90%;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  width: 526px;

  img {
    margin: 0 auto;
    margin-top: 36px;
    width: 262px;

    @media screen and (${breakpoints.bg}) {
      width: 241px;
    }

    @media screen and (${breakpoints.md}) {
      width: 228px;
    }
  }

  h1 {
    font-size: 29px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    color: #ffffff;
    text-align: center;
    margin-top: 96px;
    margin-bottom: 30px;

    @media screen and (${breakpoints.bg}) {
      margin-top: 53px;
    }

    @media screen and (${breakpoints.md}) {
      width: 65px;
      margin-top: 86px;
      margin-left: 166px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-left: 70px;
  }

  @media screen and (${breakpoints.bg}) {
    height: 78%;
  }

  @media screen and (${breakpoints.md}) {
    height: 68%;
  }

  @media screen and (${breakpoints.sm}){
    height:100%;
  }
`

export const SignLink = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  margin-left: 72px;
  margin-top: 8px;

  a {
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (${breakpoints.md}) {
    margin-top: 6px;
  }
`

export const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  color: #ffffff;
`

export const InputForms = styled.input`
  background: #ffffff;
  border-radius: 5px;
  padding-left: 10px;
  height: 32px;
  width: 85%;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  margin-top: 2px;
  margin-bottom: ${props => (props.error ? '5px' : '25px')};
`

export const Nome = styled.h3`
  color: #ffffff;
  color: white;
  font-size: 14px;
  margin-left: 145px;
  margin-top: -6px;

  @media screen and (${breakpoints.bg}) {
    margin-left: 156px;
    font-size: 13px;
  }

  @media screen and (${breakpoints.md}) {
    margin-left: 110px;
  }
`

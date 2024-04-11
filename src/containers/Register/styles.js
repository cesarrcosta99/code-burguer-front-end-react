import styled from 'styled-components'
import Background from '../../assets/Background.png'
import breakpoints from '../../styles/breakpoints'

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
  height: 94%;

  @media screen and (${breakpoints.sm}) {
    height:0;
  }

`

export const SecondContainer = styled.div`
  background: #373737;
  height: 94%;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  width: 526px;

  img {
    margin: 0 auto;
    margin-top: 40px;
    width: 262px;
  }

  h1 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    margin-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-left: 70px;
    margin-top: 13px;
  }

  @media screen and (${breakpoints.sm}) {
    height:100%;
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
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  height: 32px;
  width: 85%;
  margin-top: 2px;
  margin-bottom:${props=>props.error ? "2px" : "16px"};

  @media screen and (${breakpoints.sm}) {
    width:69%;
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
    cursor:pointer;
  }
`
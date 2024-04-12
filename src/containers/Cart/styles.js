import styled from "styled-components"
import breakpoints from "../../styles/breakpoints"


export const Container=styled.div`
    background-color:#e5e5e5;
    min-height:calc(100vh - 72px);
    min-width:max-content;
`

export const Imagem=styled.img`
    width:100vw;
`

export const WrapContainer=styled.div`
    display:flex;
    margin-left:50px;
    margin-top:100px;
    gap:34px;

    @media screen and (${breakpoints.sm}){
        flex-direction:column;
        margin-left:0;
        margin-top:23px;
        gap:1px;
    }
`



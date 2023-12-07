import { Button as Botao } from "./styles";
import PropTypes from "prop-types"

export function Button({children,...rest}){
    return <Botao {...rest}>{children}</Botao>
}



Button.propTypes={
    children:PropTypes.string
}
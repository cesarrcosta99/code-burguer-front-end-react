import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"

  function PrivateRoute({children}) {
    const user=localStorage.getItem('codeBurguer:user')

    if(!user) {
        return <Navigate to='/login' replace={true}/>
    }

    return children
}

export default PrivateRoute


PrivateRoute.propTypes={
    children:PropTypes.oneOfType([PropTypes.func,PropTypes.element])
}
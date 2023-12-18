import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"
import { Header } from "../components";

  function PrivateRoute({children}) {
    const user=localStorage.getItem('codeBurguer:user')

    if(!user) {
        return <Navigate to='/login' replace={true}/>
    }

    return (
        <>
            <Header/>
             {children}
             </>
             )
}

export default PrivateRoute


PrivateRoute.propTypes={
    children:PropTypes.oneOfType([PropTypes.func,PropTypes.element])
}
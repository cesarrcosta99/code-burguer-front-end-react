import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"
import { Header } from "../components";

  function PrivateRoute({children,isAdmin}) {
    const user=localStorage.getItem('codeBurguer:user')

    if(!user) {
        return <Navigate to='/login' replace={true}/>
    }

    if(isAdmin && !JSON.parse(user).admin){
        return <Navigate to='/' replace={true}/>
    }

    return (
        <>
            {!isAdmin && <Header/>}
             {children}
             </>
             )
}

export default PrivateRoute


PrivateRoute.propTypes={
    children:PropTypes.oneOfType([PropTypes.func,PropTypes.element]),
    isAdmin:PropTypes.bool
}
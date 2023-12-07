import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from "prop-types"

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData,setUserData]=useState({})

  const putUserData= (user)=>{
    setUserData(user)
     localStorage.setItem('codeBurguer:user',JSON.stringify(user))
  }

  useEffect(()=>{
    const pegarItem=()=>{
      const usuario= localStorage.getItem('codeBurguer:user')

      if(usuario){
        setUserData(JSON.parse(usuario))
      }
    }
    pegarItem()

  },[])

  return <UserContext.Provider value={{putUserData,userData}}>{children}</UserContext.Provider>
}

export const UseUser=()=>{
  const context=useContext(UserContext)

  if(!context) {
    throw new Error("Contexto não funcionando")
  }

  return context 
}



UserProvider.propTypes={
  children:PropTypes.node
}







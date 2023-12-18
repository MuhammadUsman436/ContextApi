import React,{useState} from 'react'
const Screen12CreateContext = React.createContext();

const Screen12ContextProvider = ({children} ) =>{
    const [User,setUser] = useState(null)
    return(
        <Screen12CreateContext.Provider value={{User,setUser}}>
            {children}
        </Screen12CreateContext.Provider>
    )
    
}
export {Screen12ContextProvider,Screen12CreateContext};
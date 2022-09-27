import { useContext, createContext, useState, useEffect } from "react"

const Context = createContext()

const MainContext = ({ children }) => {

    const SERVER = "http://localhost:5000"
    const [ token, setToken ] = useState();

    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])

    return (
        <Context.Provider value={{ SERVER, token, setToken }} >
            { children }
        </Context.Provider>
    )
}

const GlobalStates = () => {
    return useContext(Context)
}

export default MainContext
export { GlobalStates }
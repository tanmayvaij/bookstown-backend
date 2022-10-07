import { useContext, createContext, useState, useEffect } from "react"

const Context = createContext()

const MainContext = ({ children }) => {

    const SERVER = "http://localhost:5000"
    const [ token, setToken ] = useState();
    const [ vendor, setVendor ] = useState();

    const getUserDetails = async (local_token) => {

        setToken(local_token)

        const res = await fetch(`${SERVER}/api/auth/user-details`, {
            method: "POST",
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({local_token})
        })

        const data = await res.json()
        setVendor(data.vendor)

    }

    useEffect(() => {
        const local_token = localStorage.getItem("token")
        if ( local_token ) getUserDetails(local_token)
    }, [])

    return (
        <Context.Provider value={{ SERVER, token, setToken, vendor }} >
            { children }
        </Context.Provider>
    )
}

const GlobalStates = () => {
    return useContext(Context)
}

export default MainContext
export { GlobalStates }

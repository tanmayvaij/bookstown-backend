import { useContext, createContext, useState, useEffect } from "react"

const Context = createContext()

const MainContext = ({ children }) => {

    const SERVER = "http://localhost:6000"
    const [ token, setToken ] = useState();
    const [ user, setUser ] = useState();

    const getUserDetails = async () => {

        const res = await fetch(`${SERVER}/api/auth/user-details`, {
            method: "POST",
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({token})
        })

        const data = await res.json()
        console.log(data)

    }

    useEffect(() => {
        setToken(localStorage.getItem("token"))
        if (token) {
            getUserDetails()
        }
    }, [])

    return (
        <Context.Provider value={{ SERVER, token, setToken, user }} >
            { children }
        </Context.Provider>
    )
}

const GlobalStates = () => {
    return useContext(Context)
}

export default MainContext
export { GlobalStates }
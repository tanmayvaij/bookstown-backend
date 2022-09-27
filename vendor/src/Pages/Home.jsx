import { GlobalStates } from "../Context"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Home = () => {

    const { token } = GlobalStates()
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) navigate("/auth")
    }, [])

    return (
        <>Home Page</> 
    )
}

export default Home
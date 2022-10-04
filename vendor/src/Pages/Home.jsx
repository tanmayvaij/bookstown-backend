import { GlobalStates } from "../Context"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Entry from "../Components/Entry"

const Home = () => {

    const { token } = GlobalStates()
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) navigate("/auth")
    }, [])

    return (
        <Entry />
    )
}

export default Home
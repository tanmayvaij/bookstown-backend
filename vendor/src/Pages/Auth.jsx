import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Signin from "../Components/Signin"
import Signup from "../Components/Signup"
import { GlobalStates } from "../Context"

const Auth = () => {

    const { token } = GlobalStates()
    const navigate = useNavigate()

    useEffect(() => {
        if (token) navigate("/")
    }, [token])

    return (
        <div id="Auth">
            <Signin/>
            <Signup/>
        </div>
    )
}

export default Auth

import { Route, Routes } from "react-router-dom"
import Auth from "./Pages/Auth"
import Home from "./Pages/Home"

const App = () => {

    return (

        <Routes>
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="/" element={<Home />} />
        </Routes>

    )

}

export default App

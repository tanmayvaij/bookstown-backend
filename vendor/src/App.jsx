import { Route, Routes } from "react-router-dom"
import Auth from "./Pages/Auth"

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={ <Auth/> } />
        </Routes>
    )
}

export default App

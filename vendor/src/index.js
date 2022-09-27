import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MainContext from "./Context";
import "./index.css"

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(
        <MainContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MainContext>
    )

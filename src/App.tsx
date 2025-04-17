import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import {ROUTES} from "./constants/routers.ts";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route path={ROUTES.WELCOME} element={<WelcomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
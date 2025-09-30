import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx"
import Logement from "./pages/Logement.jsx"
import About from "./pages/About.jsx"
import NotFound from "./pages/NotFound.jsx"
import Footer from "./components/Footer.jsx"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

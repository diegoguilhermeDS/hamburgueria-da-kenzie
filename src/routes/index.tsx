import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/login" element={<h1>login</h1>}/>
            <Route path="/register" element={<h1>register</h1>}/>
            <Route path="/home" element={<Home/>}/>
            
            <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
    )
}
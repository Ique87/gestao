import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../componente/view/Home';
import Eventos from '../componente/view/Eventos';
import Fichas  from '../componente/view/Fichas';
import Sobre from '../componente/view/Sobre';
import Login from '../componente/view/Login';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/fichas" element={<Fichas />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default AppRoutes;
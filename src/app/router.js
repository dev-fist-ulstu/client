import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import Register from "../pages/user/ui/register/register";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};

export default Router;

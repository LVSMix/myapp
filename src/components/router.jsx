import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import Dishes from "./dishes";
import Dish from "./dish";
import Countries from "./countries";
import NotFound from "./notFound";

const Router = () => (
    <BrowserRouter>
       <Routes>
         <Route exact path="/" element={<App />} />
         <Route path='/paises' element={<Countries />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
    </BrowserRouter>
)

export default Router;
import React from 'react';
import {
BrowserRouter as Router,
Routes,Link,Route
} from 'react-router-dom';
import About from '../Screens/About';

import Content from '../Screens/Content';

import Home from '../Screens/Home';

function Routing() {
    return (
        <div>
            <Routes>
            <Route path="/home"  element={<Home />} />
            <Route path="/content"  element={<Content  />} />
            <Route path="/about"  element={<About />} />
           
         
            <Route path="/"  element={<Home />} />
            </Routes>
        </div>
    );
}

export default Routing
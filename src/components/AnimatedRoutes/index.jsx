// React
import { Routes, Route, useLocation } from 'react-router-dom'
// Pages
import Home from '../../pages/Home';
import Continents from '../../pages/Continents';
import Country from '../../pages/Country';
import USAPage from '../../pages/USA';
//Others import
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/continents' element={<Continents />} />
                <Route path='/countries/usa' element={<USAPage />} />
                <Route path='/countries/:country' element={<Country />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
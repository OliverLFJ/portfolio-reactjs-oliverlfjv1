import { Route, Routes } from 'react-router-dom';

import Home from '../../components/main/Home';
import About from '../../components/main/About';
import Project from '../../components/main/Project';
import Contact from '../../components/main/Contact';

const GeneralRoute = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/projects' element={<Project />} />
            <Route exact path='/contact' element={<Contact />} />
        </Routes>
    )
}
export default GeneralRoute
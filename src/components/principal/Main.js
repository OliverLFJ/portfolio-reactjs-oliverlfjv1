import "../../styles/main/MainStyles.css"
import { Route, Routes } from 'react-router-dom';
import Home from '../../components/main/Home';
import About from '../../components/main/About';
import Project from '../../components/main/Project';
import Contact from '../../components/main/Contact';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Main = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, [pathname]);
    return (
        <div className="main">
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/projects' element={<Project />} />
                <Route exact path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Main
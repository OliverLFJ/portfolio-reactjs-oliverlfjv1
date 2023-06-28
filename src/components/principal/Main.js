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
      // "document.documentElement.scrollTo" is the magic for React Router Dom v6
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Optional if you want to skip the scrolling animation
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
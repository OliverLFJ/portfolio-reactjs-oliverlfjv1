import "../../styles/navbar/Navbar.css"
import { useEffect, useState } from "react"
import Logo from '../../assets/images/logo-mobile.svg'
import { Link } from "react-router-dom"
const Navbar = ({ onChildData, statusOption, changingValue }) => {
    const [showIcon, setShowIcon] = useState(false)
    const [modalState, setModalState] = useState('statusOption')
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        if (modalState === true && showIcon === true) {
            const newState = !showIcon;
            setShowIcon(newState);
            onChildData(newState);
            setModalState(true)
        } else {
            setModalState(statusOption)
        }
    }, [modalState, showIcon, onChildData, statusOption]);

    const handleStatusModal = () => {
        const newState = !showIcon;
        setShowIcon(newState);
        onChildData(newState);
        setModalState(false);
        changingValue(false)
    }

    const closeModal = () =>{
        setModalState(true);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const threshold = 200;
            if (scrollTop > threshold && !isSticky) {
                setIsSticky(true);
            } else if (scrollTop <= threshold && isSticky) {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isSticky]);


    return (
        <div className={isSticky ? "header sticky" : "header"}>
            <Link to="/" className="logo-container" onClick={closeModal}>
                <div className="logo">
                    <img src={Logo} />
                </div>
            </Link>
            <div className="button-menu-container" >
                <div className="button-menu" onClick={handleStatusModal}>
                    <div className="svg-menu">
                        <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className={showIcon === false ? 'ct-icon' : 'none'} width="22" height="23" viewBox="0 0 17 14" aria-hidden="true" data-type="type-3">
                            <rect y="0.00" width="22" height="1.7" rx="1"></rect>
                            <rect y="6.15" width="22" height="1.7" rx="1"></rect>
                            <rect y="12.3" width="22" height="1.7" rx="1"></rect>
                        </svg>
                        <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} viewBox="0 0 16 16" className={showIcon === false ? 'hide' : 'ct-icon-close'} width="18" height="17" >
                            <path d="M1 15a1 1 0 01-.71-.29 1 1 0 010-1.41l5.8-5.8-5.8-5.8A1 1 0 011.7.29l5.8 5.8 5.8-5.8a1 1 0 011.41 1.41l-5.8 5.8 5.8 5.8a1 1 0 01-1.41 1.41l-5.8-5.8-5.8 5.8A1 1 0 011 15z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar
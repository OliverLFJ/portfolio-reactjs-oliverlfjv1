import '../../../styles/others/ModalMobileStyles.css'
import { BsGear } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import {Link, useLocation} from 'react-router-dom';
import { BsMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from 'react';
import EngFlag from '../../../assets/images/britanic-flag.png'
import SpaFlag from '../../../assets/images/spain-flag.jpg'

const ModalMobile = ({ stateModal, onLanguageChange, onChildData, onChildDataModal, actualLanguage }) => {
    const [lightMode, setlightMode] = useState(false)
    const [languageOpt, setLanguageOpt] = useState(false)
    const [menuLanguage, setMenuLanguage] = useState(false)
    const [showConfig, setShowConfig] = useState(false)
    const { t } = useTranslation();
    const location = useLocation();

    const handleStatusModal = () => {
        const newState = !stateModal;
        onChildData(newState);
        onChildDataModal(true)
        if (menuLanguage === true) {
            setMenuLanguage(false)
        }
    }

    const hideModal = () => {
        const newState = !stateModal;
        onChildData(newState);
        onChildDataModal(true);
    };

    const changeLightMode = () => {
        setTimeout(hideModal, 950);
        if (lightMode === true) {
            setlightMode(false)
        } else {
            setlightMode(true)
        }
        if (menuLanguage === true) {
            setMenuLanguage(false)
        }
    }


    const changeButtonLanguage = () => {
        setTimeout(hideModal, 950);
        if (actualLanguage == "es") {
            onLanguageChange("en")
        } else {
            onLanguageChange("es")
        }

        if (languageOpt === true) {
            setLanguageOpt(false)
        } else {
            setLanguageOpt(true)
        }
        if (menuLanguage === true) {
            setMenuLanguage(false)
        }
    }

    const handleShowConfigs = () => {
        if (showConfig === true) {
            setShowConfig(false)
        } else {
            setShowConfig(true)
        }
        if (menuLanguage === true) {
            setMenuLanguage(false)
        }
    }

    useEffect(() => {
        if (stateModal === false) {
            setMenuLanguage(false)
        }
        if (showConfig === true) {
            setShowConfig(false)
        }
    }, [stateModal])

    return (
        <div className={stateModal === true ? 'modal-container' : 'hide-modal'}>
            <div className='option-menu-modal'>
                <ul>
                    <li className={location.pathname === '/' ? 'nav-option-list-active' : 'nav-option-list'} onClick={handleStatusModal}>
                        <Link to="/" style={{ textDecoration: 'none' }}> {t('header.home')}</Link>
                    </li>
                    <li className={location.pathname === '/about' ? 'nav-option-list-active' : 'nav-option-list'} onClick={handleStatusModal}>
                        <Link to="/about" style={{ textDecoration: 'none' }}> {t('header.about')}</Link>
                    </li>
                    <li className={location.pathname === '/projects' ? 'nav-option-list-active' : 'nav-option-list'} onClick={handleStatusModal}>
                        <Link to="/projects" style={{ textDecoration: 'none' }}>    {t('header.project')}</Link>
                    </li>
                    <li className={location.pathname === '/contact' ? 'nav-option-list-active' : 'nav-option-list'} onClick={handleStatusModal}>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>   {t('header.contact')}</Link>
                    </li>
                </ul>
            </div>
            <div className='language'>
                <div className={showConfig ? 'change-language-show' : 'change-language'}>
                    <div className='language-mode'>
                        <div className={languageOpt ? 'circle-color-black-lang' : 'circle-color-lang'} onClick={changeButtonLanguage}></div>
                        {languageOpt ?
                            <div className='imgcontainer-lang-esp'>
                                <h5>ES</h5>
                                <img className='flagIconEng' alt='flag' src={SpaFlag} />
                            </div>
                            :
                            <div className='imgcontainer-lang'>
                                <h5>EN</h5>
                                <img className='flagIconEsp' alt='flag' src={EngFlag} />
                            </div>
                        }
                    </div>
                </div>
                <div className={showConfig?'config-iconcontainer-active':'config-iconcontainer'} onClick={handleShowConfigs}>
                    <BsGear className='icon-language' />
                </div>
                <div className={showConfig ? 'change-light-show' : 'change-light'}>
                    <div className='light-mode'>
                        <div className={lightMode ? 'circle-color-black' : 'circle-color'} onClick={changeLightMode}></div>
                        {lightMode ?
                            <BsFillSunFill className='sunIcon' />
                            :
                            <BsMoonFill className='moonIcon' />
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalMobile
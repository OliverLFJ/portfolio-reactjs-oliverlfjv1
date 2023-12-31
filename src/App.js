import Navbar from "./components/principal/Navbar"
import Main from "./components/principal/Main"
import Footer from "./components/principal/Footer"
import ModalMobile from "./components/navbar/other/ModalMobile"
import './styles/GeneralStyles.css'
import { useEffect, useState } from "react"
import i18n from "./config/i18n";
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {

  const [modalState, setModalState] = useState(false)
  const [optModal, setOptModal] = useState(false)

  const [language, setLanguage] = useState("es");

  const setModalStatus = (status) => {
    setModalState(status);
    document.body.style.overflow = modalState ? 'auto' : 'hidden';
  }
  const handleLanguageChange = (language) => {
    setLanguage(language);
  }
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const setModalOpt = (status) => {
    setOptModal(status);
  }

  return (
    <div className="app-container">
      <Router>
        <Navbar onChildData={setModalStatus} changingValue={setModalOpt} statusOption={optModal} />
        <ModalMobile onChildDataModal={setModalOpt} onLanguageChange={handleLanguageChange} actualLanguage={language} onChildData={setModalStatus} stateModal={modalState} />
        <Main />
        <Footer />
      </Router>
    </div>
  )
}

export default App
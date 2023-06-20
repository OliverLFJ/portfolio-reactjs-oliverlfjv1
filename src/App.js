import Navbar from "./components/principal/Navbar"
import Main from "./components/principal/Main"
import Footer from "./components/principal/Footer"
import ModalMobile from "./components/navbar/other/ModalMobile"
import './styles/GeneralStyles.css'
import { useEffect, useState } from "react"
import i18n from "./config/i18n";
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

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar onChildData={setModalStatus} changingValue={setModalOpt} statusOption={optModal} />
      <ModalMobile onChildDataModal={setModalOpt} onLanguageChange={handleLanguageChange} actualLanguage={language} onChildData={setModalStatus} stateModal={modalState} />
      <Main />
      <Footer />
    </div>
  )
}

export default App
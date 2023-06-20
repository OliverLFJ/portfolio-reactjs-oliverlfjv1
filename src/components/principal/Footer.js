import "../../styles/footer/FooterStyles.css"
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineFacebook } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const openSocialMedia = (url) => {
        window.open(url)
    }
    return (
        <div className="footer">
            <div className="icons-footer">
                <div className="icons-footer-container">
                    <AiOutlineLinkedin className="icon-footer" onClick={() => openSocialMedia("https://www.linkedin.com/in/jorge-oliver-l%C3%B3pez-fierro/")}/>
                    <AiOutlineGithub className="icon-footer" onClick={() => openSocialMedia("https://github.com/OliverLFJ")}/>
                    <AiOutlineFacebook className="icon-footer" onClick={() => openSocialMedia("https://www.facebook.com/oliver.lopez.75470/")}/>
                </div>
                <div className="credits-footer">
                    <h5>{t('footer.credits')}</h5>
                </div>
            </div>
        </div>

    )
}

export default Footer
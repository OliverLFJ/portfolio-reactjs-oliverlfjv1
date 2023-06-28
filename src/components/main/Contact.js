import "../../styles/main/ContactStyles.css"
import { AiOutlineHeart } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    const handleEmailClick = () => {
        const emailAddress = 'jorgeoliver.lf@gmail.com';
        window.location.href = `mailto:${emailAddress}`;
    };
    return (
        <div className='container-contact'>
            <div className='contact-general-container'>
                <h2 className="title-contact">{t('contact.getContact')}</h2>
                <p className="contact-description">{t('contact.moreInfoContact')}</p>
                <div className="button-contact" onClick={handleEmailClick}>
                    <h4 className="button-text">{t('contact.greetings')}</h4>
                </div>
                <AiOutlineHeart className="heart-contact" />
            </div>
        </div>
    )
}

export default Contact
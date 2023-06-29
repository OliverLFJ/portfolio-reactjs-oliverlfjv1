import { useTranslation } from 'react-i18next';
import '../../../styles/main/KnowMore.css'
import Picture from '../../../assets/images/fotografia.webp'

const KnowMore = () => {
    const { t } = useTranslation();

    return (
        <div className='container-knowme'>
            <div className='knowme-info'>
                <h3 className='project-title'>{t('knowme.titleKnow')}</h3>
                <img className='myPicture' alt='My picture' src={Picture} />
            </div>
        </div>
    )
}

export default KnowMore
import { useTranslation } from 'react-i18next';
import '../../../styles/main/KnowMore.css'
import Picture from '../../../assets/images/fotografia.webp'

const KnowMore = () => {
    const { t } = useTranslation();

    return (
        <div className='container-knowme'>
            <div className='knowme-info'>
                <h3 className='know-title'>{t('knowme.titleKnow')}</h3>
                <div className='profile-container'>
                    <img className='myPicture' alt='My picture' src={Picture} />
                </div>
                <div className='personal-information'>
                    <p className='text-personal-info'>
                        {t('knowme.paragraph1')}
                    </p>
                    <p className='text-personal-info'>
                        {t('knowme.paragraph2')}
                    </p>
                    <p className='text-personal-info'>
                        {t('knowme.paragraph3')}
                    </p>
                    <p className='text-personal-info'>
                        {t('knowme.paragraph4')}
                    </p>
                    <p className='text-personal-info'>
                        {t('knowme.paragraph5')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default KnowMore
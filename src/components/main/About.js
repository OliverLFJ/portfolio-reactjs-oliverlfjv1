import { useTranslation } from 'react-i18next';
import "../../styles/main/AboutStyles.css"

const About = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    return (
        <div className="container-text-about">
            <h3 className='about-title'>{t('about.aboutMe')}</h3>
            <p>{t('about.history')}</p>
            <div className='laboral-experience'>
                <h3 className='about-title'>{t('about.experience')}</h3>
                <div className='laboral-container'>
                    <div className='title-laboral-container'>
                        <h5 className='company-name'>GFT Technologies</h5>
                        <h4 className='position'>{t('about.gftPosition')}</h4>
                        <h5 className='date-position'>{t('about.gftDate')}</h5>
                    </div>
                    <div className='information-laboral-experience'>
                        <p>
                            {t('about.gftResume')}
                        </p>
                    </div>
                    <div className='technologies-used-container'>
                        <div className='technology-used'>JavaScript</div>
                        <div className='technology-used'>CSS</div>
                        <div className='technology-used'>HTML5</div>
                        <div className='technology-used'>WEB<br/>Components</div>
                    </div>
                </div>
                <div className='laboral-container'>
                    <div className='title-laboral-container'>
                        <h5 className='company-name'>INDRA Minsait</h5>
                        <h4 className='position'>{t('about.indraPosition')}</h4>
                        <h5 className='date-position'>{t('about.indraDate')}</h5>
                    </div>
                    <div className='information-laboral-experience'>
                        <p>
                            {t('about.indraResume')}
                        </p>
                    </div>
                    <div className='technologies-used-container'>
                        <div className='technology-used'>JavaScript</div>
                        <div className='technology-used'>CSS</div>
                        <div className='technology-used'>Lit<br/>Element</div>
                        <div className='technology-used'>WEB<br/>Components</div>
                        <div className='technology-used'>Jira</div>
                        <div className='technology-used'>Android<br/>Studio</div>
                        <div className='technology-used'>Java</div>
                    </div>
                </div>
                <div className='laboral-container'>
                    <div className='title-laboral-container'>
                        <h5 className='company-name'>Linnegocios</h5>
                        <h4 className='position'>{t('about.linnPosition')}</h4>
                        <h5 className='date-position'>{t('about.linnDate')}</h5>
                    </div>
                    <div className='information-laboral-experience'>
                        <p>
                            {t('about.linnResume')}
                        </p>
                    </div>
                    <div className='technologies-used-container'>
                        <div className='technology-used'>JavaScript</div>
                        <div className='technology-used'>CSS</div>
                        <div className='technology-used'>HTML5</div>
                        <div className='technology-used'>JQuery</div>
                        <div className='technology-used'>Grails</div>
                        <div className='technology-used'>SASS</div>
                    </div>
                </div>
                <div className='laboral-container'>
                    <div className='title-laboral-container'>
                        <h5 className='company-name'>Jorges Lubricantes</h5>
                        <h4 className='position'>{t('about.jorgePosition')}</h4>
                        <h5 className='date-position'>{t('about.jorgeDate')}</h5>
                    </div>
                    <div className='information-laboral-experience'>
                        <p>
                            {t('about.jorgeResume')}
                        </p>
                    </div>
                    <div className='technologies-used-container'>
                        <div className='technology-used'>JavaScript</div>
                        <div className='technology-used'>CSS</div>
                        <div className='technology-used'>HTML5</div>
                        <div className='technology-used'>JQuery</div>
                        <div className='technology-used'>Bootstrap</div>
                        <div className='technology-used'>Apache</div>
                        <div className='technology-used'>Figma</div>
                    </div>
                </div>
                <div className='laboral-container'>
                    <div className='title-laboral-container'>
                        <h5 className='company-name'>Social Conecta</h5>
                        <h4 className='position'>{t('about.socialPosition')}</h4>
                        <h5 className='date-position'>{t('about.socialDate')}</h5>
                    </div>
                    <div className='information-laboral-experience'>
                        <p>
                            {t('about.socialResume')}
                        </p>
                    </div>
                    <div className='technologies-used-container'>
                        <div className='technology-used'>Asana</div>
                        <div className='technology-used'>Adobe</div>
                        <div className='technology-used'>Wordpress</div>
                        <div className='technology-used'>Figma</div>
                    </div>
                </div>
                <div className='laboral-container'>
                    <div className='title-laboral-container'>
                        <h5 className='company-name'>Hospital ISSSTE Emiliano Zapata</h5>
                        <h4 className='position'>{t('about.isstePosition')}</h4>
                        <h5 className='date-position'>{t('about.issteDate')}</h5>
                    </div>
                    <div className='information-laboral-experience'>
                        <p>
                            {t('about.issteResume')}
                        </p>
                    </div>
                    <div className='technologies-used-container'>
                        <div className='technology-used'>JavaScript</div>
                        <div className='technology-used'>HTML5</div>
                        <div className='technology-used'>MySQL</div>
                        <div className='technology-used'>CSS</div>
                        <div className='technology-used'>PHP</div>
                        <div className='technology-used'>Symfony</div>
                    </div>
                </div>
                <div className='laboral-container'>
                        <h4 className='text-download-cv'>{t('about.download')}</h4>
                    {currentLanguage==="es"?
                        <a className='button-download-cv' href="JorgeOliverESP.pdf" download>Descargar</a>:
                        <a className='button-download-cv' href="JorgeOliverENG.pdf" download>Download</a>
                    }
                </div>
            </div>
        </div>
    )
}

export default About
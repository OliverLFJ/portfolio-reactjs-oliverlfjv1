import "../../styles/main/MainStyles.css"
import { useTranslation } from 'react-i18next';
import Animation from "./other/Animation";
import ScriptAnimation from "../../assets/scripts/ScriptAnimation";
import { useEffect } from "react";

const Home = () => {
    const { t } = useTranslation();

    useEffect(() => {
        ScriptAnimation()
    }, [])
    return (
        <article className="all-home-container">
            <div className="ct-container-home">
                <div className="header-title-container-home">
                    <header>
                        <div className="greetings">
                            <h1>{t('home.greeting')}</h1>
                        </div>
                    </header>
                    <div className="information-home">
                        <p>{t('home.informationHome')}
                        </p>
                    </div>
                    <div className="animation">
                        <Animation className="outlined-container"/>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Home
import { useState } from "react";
import "../../../styles/others/Animation.css"
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"

const Animation = () => {
    const [classNameSign, setClassNameSign] = useState(true);
    const { t } = useTranslation();

    const showSign = () => {
        if (classNameSign === false) {
            setClassNameSign(true);
        } else {
            setClassNameSign(false);
        }
    }

    return (
        <div className="outlined-container">
            <div className="cartoon-container" onMouseEnter={showSign} onMouseLeave={showSign}>
                <Link to="/knowme" className={classNameSign ? 'container-know' : 'show-container-know'}>
                    <div className="know-me">
                        <h4>{t('home.knowMore')}</h4>
                    </div>
                </Link>
                <div className="head-container">
                    <div className="hair-back"></div>
                    <div className="head">
                        <div className="fringe-top-next"></div>
                        <div className="fringe-top"></div>
                        <div className="fringe"></div>
                        <div className="extra-hair"></div>
                        <div className="hair-top"></div>
                        <div className="hair-top-extra"></div>
                        <div className="hair-left"></div>
                        <div className="hair-right"></div>
                        <div className="extra-hair-top"></div>
                        <div className="extra-hair-top-bottom"></div>
                        <div className="eyebrow-left"></div>
                        <div className="eyebrow-right"></div>
                        <div className="sideburn-left"></div>
                        <div className="sideburn-right"></div>
                        <div className="eye-left">
                            <div className="glass-left">
                            </div>
                        </div>
                        <div id="iris-container" className="iris-container">
                            <div className="iris-left"></div>
                            <div className="iris-right"></div>
                        </div>
                        <div className="middle-glasses"></div>
                        <div className="eye-right">
                            <div className="glass-right">
                            </div>
                        </div>
                        <div className="nose"></div>
                        <div className="mouth" id="open-mouth"></div>
                        <div className="mouth-open" id="close-mouth">
                            <div className="teeth-top"></div>
                            <div className="tongue-left"></div>
                            <div className="tongue-right"></div>
                            <div className="teeth-bottom"></div>
                        </div>
                        <div className="left-ear"></div>
                        <div className="right-ear"></div>
                    </div>
                </div>
                <div className="body-container">
                    <div className="hood-shadow"></div>
                    <div className="hood-shadow-right"></div>
                    <div className="hood"></div>
                    <div className="hood-down"></div>
                    <div className="hood-curve"></div>
                    <div className="neck"></div>
                    <div className="torso-neck"></div>
                    <div className="sweater-container"></div>
                    <div className="lace"></div>
                    <div className="lace-right"></div>
                    <div className="lace-line"></div>
                    <div className="lace-line-right"></div>
                    <div className="arm-right"></div>
                    <div className="arm-left"></div>
                    <div className="arm-left-stroke"></div>
                    <div className="arm-right-stroke"></div>
                    <div className="stroke-bag"></div>
                    <div className="stroke-bag-bottom"></div>
                    <div className="stroke-bag-left"></div>
                    <div className="stroke-bag-right"></div>
                    <div className="arm-stroke-left"></div>
                    <div className="arm-stroke-right"></div>
                    <div className="arm-stroke-left-extra"></div>
                    <div className="arm-stroke-right-extra"></div>
                    <div className="bottom-sweater"></div>
                    <div className="bottom-sweater-extra"></div>
                </div>
                <div className="jeans-container">
                    <div className="jeans"></div>
                    <div className="trouser-bag-left"></div>
                    <div className="trouser-bag-right"></div>
                </div>
            </div>
        </div>
    )
}

export default Animation
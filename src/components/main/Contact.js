import "../../styles/main/ContactStyles.css"
import { AiOutlineHeart } from "react-icons/ai";

const Contact = () => {
    const handleEmailClick = () => {
        const emailAddress = 'jorgeoliver.lf@gmail.com';
        window.location.href = `mailto:${emailAddress}`;
    };
    return (
        <div className='container-contact'>
            <div className='contact-general-container'>
                <h2 className="title-contact">PONERSE EN CONTACTO</h2>
                <p className="contact-description">Si te interesó mi trabajo, y tienes alguna oportunidad laboral para mí estaré feliz de escuchar la propuesta, espero tu mensaje.</p>
                <div className="button-contact" onClick={handleEmailClick}>
                    <h4 className="button-text">!Hola!</h4>
                </div>
                <AiOutlineHeart className="heart-contact" />
            </div>
        </div>
    )
}

export default Contact
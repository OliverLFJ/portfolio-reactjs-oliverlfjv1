import { useTranslation } from "react-i18next";
import "../../styles/main/ProjectStyles.css"
import { AiOutlineGithub } from "react-icons/ai";

const Project = () => {
    const { t } = useTranslation();

    const openRepository = (url) => {
        window.open(url)
    }

    return (
        <div className='container-text-projects'>
            <div className='project-developed'>
                <h3 className='project-title'>{t('projects.project')}</h3>
                <div className='project-container-general'>
                    <div className='project-container'>
                        <h5 className='title-project'>CRUD Grails</h5>
                        <div className='technologies-project'>
                            <h5 className='technology-used-project'>Java</h5>
                            <h5 className='technology-used-project'>Groovy</h5>
                            <h5 className='technology-used-project'>Grails</h5>
                            <h5 className='technology-used-project'>PostgreSQL</h5>
                            <h5 className='technology-used-project'>JavaScript</h5>
                            <h5 className='technology-used-project'>CSS</h5>
                            <h5 className='technology-used-project'>GSP Template</h5>
                        </div>
                        <div className='description-project'>
                            <p>{t('projects.repositoryCrudGrails')}</p>
                        </div>
                        <div className="link-repository" onClick={() => openRepository("https://github.com/OliverLFJ/crud-grails-hospital")}>
                            <h5>{t('projects.repository')}</h5>
                            <AiOutlineGithub className="icon-github-repo" />
                        </div>
                    </div>
                </div>
                <div className='project-container-general'>
                    <div className='project-container'>
                        <h5 className='title-project'>{t('projects.repositoryCartoonTitle')}</h5>
                        <div className='technologies-project'>
                            <h5 className='technology-used-project'>HTML5</h5>
                            <h5 className='technology-used-project'>JavaScript</h5>
                            <h5 className='technology-used-project'>CSS</h5>
                        </div>
                        <div className='description-project'>
                            <p>{t('projects.repositoryCartoon')}</p>
                        </div>
                        <div className="link-repository" onClick={() => openRepository("https://github.com/OliverLFJ/cartoon-css-animated")}>
                            <h5>{t('projects.repository')}</h5>
                            <AiOutlineGithub className="icon-github-repo" />
                        </div>
                    </div>
                </div>
                <div className='project-container-general'>
                    <div className='project-container'>
                        <h5 className='title-project'>CRUD Spring Boot</h5>
                        <div className='technologies-project'>
                            <h5 className='technology-used-project'>Spring Boot</h5>
                            <h5 className='technology-used-project'>JavaScript</h5>
                            <h5 className='technology-used-project'>CSS</h5>
                            <h5 className='technology-used-project'>MySQL</h5>
                            <h5 className='technology-used-project'>HTML5</h5>
                        </div>
                        <div className='description-project'>
                            <p>{t('projects.repositorySpring')}</p>
                        </div>
                        <div className="link-repository" onClick={() => openRepository("https://github.com/OliverLFJ/crud-springboot")}>
                            <h5>{t('projects.repository')}</h5>
                            <AiOutlineGithub className="icon-github-repo" />
                        </div>
                    </div>
                </div>
                <div className='project-container-general'>
                    <div className='project-container'>
                        <h5 className='title-project'>Pokedex ReactJS</h5>
                        <div className='technologies-project'>
                            <h5 className='technology-used-project'>ReactJS</h5>
                            <h5 className='technology-used-project'>CSS</h5>
                            <h5 className='technology-used-project'>JavaScript</h5>
                            <h5 className='technology-used-project'>JSX</h5>
                            <h5 className='technology-used-project'>HTML5</h5>
                        </div>
                        <div className='description-project'>
                            <p>{t('projects.repositoryPokedex')}</p>
                        </div>
                        <div className="link-repository" onClick={() => openRepository("https://github.com/OliverLFJ/pokedex-react-oliverjlf")}>
                            <h5>{t('projects.repository')}</h5>
                            <AiOutlineGithub className="icon-github-repo" />
                        </div>
                    </div>
                </div>
                <div className='project-container-general'>
                    <div className='project-container'>
                        <h5 className='title-project'>{t('projects.repositoryPythonFileTitle')}</h5>
                        <div className='technologies-project'>
                            <h5 className='technology-used-project'>Python</h5>
                        </div>
                        <div className='description-project'>
                            <p>{t('projects.repositoryPythonFile')}</p>
                        </div>
                        <div className="link-repository" onClick={() => openRepository("https://github.com/OliverLFJ/text-file-encryption-python")}>
                            <h5>{t('projects.repository')}</h5>
                            <AiOutlineGithub className="icon-github-repo" />
                        </div>
                    </div>
                </div>
                <div className='project-container-general'>
                    <div className='project-container'>
                        <h5 className='title-project'>{t('projects.repositoryChatPythonTitle')}</h5>
                        <div className='technologies-project'>
                            <h5 className='technology-used-project'>Python</h5>
                            <h5 className='technology-used-project'>Web Sockets</h5>
                        </div>
                        <div className='description-project'>
                            <p>{t('projects.repositoryChatPython')}</p>
                        </div>
                        <div className="link-repository" onClick={() => openRepository("https://github.com/OliverLFJ/chat-python-encryption")}>
                            <h5>{t('projects.repository')}</h5>
                            <AiOutlineGithub className="icon-github-repo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Project
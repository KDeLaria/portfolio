import { useEffect, useState } from 'react';
import codeQuiz from "../assets/images/projects/code-quiz.png"
import passwordGenerator from "../assets/images/projects/password-generator.png"
import petsRUs from "../assets/images/projects/pets-r-us.jpg"
import stockPortfolio from "../assets/images/projects/stock-portfolio.png"
import weatherDashboard from "../assets/images/projects/weather-dashboard.png"
import workdayScheduler from "../assets/images/projects/workday-scheduler.png"

function Portfolio() {

    // const [gitRepos, setGitRepos] = useState([]);
    // async function getGitRepos() {
    //     const requestUrl = 'https://api.github.com/users/kdelaria/repos';
    //     const gitResponse = await fetch(requestUrl);
    //     setGitRepos(await gitResponse.json());
    // }

    // ////////////////////////
    // useEffect(() => {
    //     if (!gitRepos.length) {
    //         getGitRepos();
    //         console.log(gitRepos);

    //     }
    // }, [])
    ////////////
    return (
        <>
            <h2>Portfolio</h2>
            <section id="projects" className="container-fluid d-md-flex flex-wrap">
                <div className='row flex-wrap'>
                    <section className="col-12 col-md-4 p-1">
                        <a href="https://stock-portfolio-app-0d5fa262dd91.herokuapp.com/" target="_blank">
                            <img src={stockPortfolio} alt="stock-portfolio" className='col-12' />
                        </a>
                        <a href="https://github.com/KDeLaria/stock-portfolio-app" target="_blank">
                            <section className="project-label">
                                <h3>Stock Portfolio</h3>
                                React, Tailwind, CSS, JavaScript
                            </section>
                        </a>
                    </section>
                    <section className="col-12 col-md-4 p-1">
                        <a href="https://petsrus-mock-charity-bba28605e28b.herokuapp.com/pets" target="_blank">
                            <img src={petsRUs} alt="note-taker" className='col-12' />
                        </a>
                        <a href="https://github.com/ag-bootcamp-umn/pets-r-us" target="_blank">
                            <section className="project-label">
                                <h3>Pets R Us</h3>
                                Express/Sequelize/MySQL/Handlebars
                            </section>
                        </a>
                    </section>
                    <section className="col-12 col-md-4 p-1">
                        <a href="https://kdelaria.github.io/work-day-scheduler/" target="_blank">
                            <img src={workdayScheduler} alt="work-day-scheduler" className='col-12' />
                        </a>
                        <a href="https://github.com/KDeLaria/work-day-scheduler" target="_blank">
                            <section className="project-label">
                                <h3>Work Day Scheduler</h3>
                                HTML/CSS/Javascript/Bootstrap
                            </section>
                        </a>
                    </section>
                    <section className="col-12 col-md-4 p-1">
                        <a href="https://kdelaria.github.io/weather-dashboard/" target="_blank">
                            <img src={weatherDashboard} alt="weather-dashboard" className='col-12' />
                        </a>
                        <a href="https://github.com/KDeLaria/weather-dashboard" target="_blank">
                            <section className="project-label">
                                <h3>Weather Dashboard</h3>
                                HTML/CSS/Javascript
                            </section>
                        </a>
                    </section>
                    <section className="col-12 col-md-4 p-1">
                        <a href="https://kdelaria.github.io/code-quiz/" target="_blank">
                            <img src={codeQuiz} alt="code-quiz" className='col-12' />
                        </a>
                        <a href="https://github.com/KDeLaria/code-quiz" target="_blank">
                            <section className="project-label">
                                <h3>Code Quiz</h3>
                                HTML/CSS/Javascript
                            </section>
                        </a>
                    </section>
                    <section className="col-12 col-md-4 p-1">
                        <a href="https://kdelaria.github.io/password-generator/" target="_blank">
                            <img src={passwordGenerator} alt="password-generator" className='col-12' />
                        </a>
                        <a href="https://github.com/KDeLaria/password-generator" target="_blank">
                            <section className="project-label">
                                <h3>Password Generator</h3>
                                HTML/CSS/Javascript
                            </section>
                        </a>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
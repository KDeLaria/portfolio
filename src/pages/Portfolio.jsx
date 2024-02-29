import { useEffect, useState } from 'react'
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
            <section id="projects" class="info">
                <section class="project">
                    <a href="https://github.com/KDeLaria/weather-dashboard" target="_blank">
                        <img class="showcase-project"
                            src="https://kdelaria.github.io/weather-dashboard/assets/images/screenshot.png" alt="weather-dashboard" />
                        <section class="project-label">
                            <h3>Weather Dashboard</h3>
                            HTML/CSS/Javascript
                        </section>
                    </a>
                </section>
                <section class="project">
                    <a href="https://github.com/KDeLaria/code-quiz" target="_blank">
                        <img class="project" src="https://kdelaria.github.io/code-quiz/assets/images/screenshot.png" alt="code-quiz" />
                        <section class="project-label">
                            <h3>Code Quiz</h3>
                            HTML/CSS/Javascript
                        </section>
                    </a>
                </section>
                <section class="project">
                    <a href="https://github.com/KDeLaria/note-taker" target="_blank">
                        <img class="project" src="https://kdelaria.github.io/note-taker/images/screenshot.png" alt="note-taker" />
                        <section class="project-label">
                            <h3>Note Taker</h3>
                            HTML/CSS/Javascript/Express
                        </section>
                    </a>
                </section>
                <section class="project">
                    <a href="https://github.com/KDeLaria/work-day-scheduler" target="_blank">
                        <img class="project" 
                        src="https://kdelaria.github.io/work-day-scheduler/assets/images/screenshot.png" 
                        alt="work-day-scheduler" />
                        <section class="project-label">
                            <h3>Work Day Scheduler</h3>
                            HTML/CSS/Javascript/Bootstrap
                        </section>
                    </a>
                </section>
                <section class="project">
                    <a href="https://github.com/KDeLaria/text-editor" target="_blank">
                        <img class="project" src="../assets/images/text-editor.png" 
                        alt="text-editor" />
                        <section class="project-label">
                            <h3>Text Editor</h3>
                            HTML/Javascript/Node.js/Express
                        </section>
                    </a>
                </section>
                <section class="project">
                    <a href="https://github.com/KDeLaria/password-generator" target="_blank">
                        <img class="project" src="https://kdelaria.github.io/password-generator/assets/images/Screenshot.png" 
                        alt="password-generator" />
                        <section class="project-label">
                            <h3>Password Generator</h3>
                            HTML/CSS/Javascript
                        </section>
                    </a>
                </section>
            </section>
        </>
    );
};

export default Portfolio;
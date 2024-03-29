import resumeFile from "../assets/docs/kevin_delaria_resume.pdf"

function Resume() {


    return (
        <>
            <h2>Resume</h2><br />
            <h4>Technical Skills</h4>
            <section>
                <b>Frontend:</b> HTML 5, CSS 3, JavaScript, jQuery, React.js, Handlebars<br />
                <b>Other Languages:</b> C++<br />
                <b>Backend:</b> MySQL, MongoDB, Express, Node.js<br />
            </section><br />
            <h4>Projects</h4>
            <b><a href="https://github.com/KDeLaria/weather-dashboard" target="_blank">Weather Dashboard</a> | January 11, 2024</b>
            <ul>
                <li>• Uses the Open Weather API to retrieve the current weather.</li>
                <li>• Tools/Languages:  Visual Studio, HTML, Bootstrap, CSS, JavaScript</li>
            </ul><br />
            <b><a href="https://github.com/KDeLaria/code-quiz" target="_blank">Code Quiz</a> | January 1, 2024</b>
            <ul>
                <li>• Quizzes the user on their knowledge of basic JavaScript.</li>
                <li>• Allows the user to save their score.</li>
                <li>• Tools/Languages:  Visual Studio, HTML, CSS, JavaScript</li>
            </ul><br />
            <p>Download the&nbsp;
                <a href={resumeFile}
                    target="_blank">resume</a>.</p>
        </>
    );
};

export default Resume;
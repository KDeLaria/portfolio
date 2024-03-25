import profileImage from "../assets/images/profile.jpg"

function AboutMe() {
//height={160} width={120} 

    return (
        <>
            <h2>About Me</h2><br />
            <div className="image">
                <img src={profileImage} className="col-12 col-md-1" alt="Kevin DeLaria" />
            </div>
            <br />
            <section>
                <p className="large py-md-5">{/* remove 'py-md-5' when if content is added */}
                    I’m a good natured and dependable web developer known for using
                    critical thinking skills and a diplomatic approach to logically solving complex problems.
                    I enjoy learning and exploring new programming languages, development techniques and technologies.
                </p>
            </section>
        </>
    );
};

export default AboutMe;
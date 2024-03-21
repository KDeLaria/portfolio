

function Header () {
    return (
        <header className="flex-md-row d-md-flex align-items-md-end bg-secondary rounded">
        <div className="col-md-6 px-md-2">
        <h1 className="text-md-start" width="fit-content" height="fit-content" >Kevin DeLaria</h1>
        </div>
        <nav className="col-md-6">
          <ul className="d-md-flex justify-content-md-around">
            <li className="d-md-inline-flex">
              <a href="/">About Me</a>
            </li>
            <li className="d-md-inline-flex">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="d-md-inline-flex">
              <a href="/contact-me">Contact</a>
            </li>
            <li className="d-md-inline-flex">
              <a href="resume">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;

import './NavBar.css'

export default function NavBar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg" id="navBar">
            <div className="container">
                <a className="navbar-brand" href="#">START REACT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                Menu<span className="navbar-toggler-icon navbar-dark"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item special">
                        <a className="nav-link active p-0" aria-current="page" href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link p-0" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link p-0" href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

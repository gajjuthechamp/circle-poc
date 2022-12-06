import React from 'react'
import Logo from '../../images/logo.png'
import "./Header.scss"

const Header = () => {
  return (
	<header className="header">
		<div className="container">
			<nav className="navbar navbar-expand-lg ">
				<div className="container-fluid">
					<a className="navbar-brand" href="/"><img src={Logo} alt="Biffa" /> </a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item"><a className="nav-link active" aria-current="page" href="#Sustainability">Sustainability</a></li>
							<li className="nav-item"><a className="nav-link active" aria-current="page" href="#Services">Services</a></li>
							<li className="nav-item"><a className="nav-link active" aria-current="page" href="#Solutions">Solutions</a></li>
							<li className="nav-item"><a className="nav-link active" aria-current="page" href="#Support">Support</a></li>
						</ul>
						<div class="d-flex">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item"><a className="nav-link active" aria-current="page" href="#Getaquote">Get a quote</a></li>
								<li className="nav-item"><a className="nav-link active" aria-current="page" href="#MyBiffa">MyBiffa</a></li>
							</ul>
						</div>					
					</div>
				</div>
			</nav>
		</div>	
	</header>
  )
}

export default Header

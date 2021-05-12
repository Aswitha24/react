import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navbar className="menu md-2" collapseOnSelect expand="lg md-2" bg="dark" variant="dark">
            <Navbar.Brand >FOOD DELIVERY APPLICATION</Navbar.Brand>
            <Nav>
            <Nav.Link href="/Home">HOME</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <div className="collapse navbar-collapse" id="mobile-nav">

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link " href="/addUser">
                    <h5>Sign Up</h5>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    <h5>Login</h5>
        </a>
        </li>
                <li className="nav-item">
                  <a className="nav-link" href='/Home'>
                    <h5>Logout</h5>
        </a>

                </li>
              </ul>
            </div>
          </Navbar>
        </header>
      </div>
    )
  }
}

export default HeaderComponent;
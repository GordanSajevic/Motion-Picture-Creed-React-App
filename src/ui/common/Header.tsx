import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <header className='header'>
        <Navbar>
          <Container>
          <div style={{display: 'flex', color: 'white'}}>
            <img src={process.env.PUBLIC_URL + "home.png"} style={{ width: '40px', height: '40px', marginRight: '0.5em' }} />
            <h2>Motion Picture Creed</h2>
          </div>
          <Navbar.Brand>
              <NavLink to="/" className='nav-link'>
                Home
              </NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to="/screen-shows" className='nav-link' >
                Movies and TV shows
              </NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to="/screen-shows" className='nav-link' >
                About
              </NavLink>
            </Navbar.Brand>
          </Container>
        </Navbar>
    </header>
  );
};

export default Header;
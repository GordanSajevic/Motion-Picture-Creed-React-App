import { NavLink } from 'react-router-dom';
import { PageHeader, Row } from 'antd';

const Header = () => {
  return (
    <header className='header'>
      <PageHeader
          className="site-page-header"
          title="Motion Picture Creed"
          avatar={{
            src: process.env.PUBLIC_URL + "home.png",
          }}
      >
        <Row className=''>
          <NavLink to="/" className='header-item'>
            Home
          </NavLink>
          <NavLink to="/screen-shows" className='header-item'>
            Movies and TV shows
          </NavLink>
          <NavLink to="/screen-shows" className='header-item'>
            About
          </NavLink>
        </Row>
        </PageHeader>
      </header>
  );
};

export default Header;
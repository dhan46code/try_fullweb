import '../Style/Navbar.css';
import { FaBars } from 'react-icons/fa';
import { link } from './link';
function Navbar() {
  return (
    <>
      <header>
        <nav class='nav'>
          <div className='nav-center'>
            {/* nav-header */}
            <div className='nav-header'>
              <h2>logo</h2>
              <button className='nav-toggle'>
                <FaBars />
              </button>
            </div>
            {/* nav-list */}
            <ul className='nav-list'>
              {link.map((link_) => {
                return (
                  <li key={link_.id}>
                    <a href={link_.url}>{link_.text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

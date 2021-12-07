import react, { useState, useEffect, useRef } from 'react';
import reactdom from 'react-dom';
import '../Style/Navbar.css';
import { FaBars } from 'react-icons/fa';
import { link } from './data';
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainer = useRef(null);
  const linkRef = useRef(null);

  // for handleClick Links
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;
    console.log(location);

    window.scrollTo({
      left: 0,
      top: location - 68,
    });
  };

  useEffect(() => {
    const linkHeight = linkRef.current.getBoundingClientRect().height;
    // console.log(linkHeight); 132
    if (showLinks) {
      linkContainer.current.style.height = `${linkHeight}px`;
    } else {
      linkContainer.current.style.height = `0px`;
    }
  }, [showLinks]);
  return (
    <>
      <header>
        <nav className='nav'>
          <div className='nav-center'>
            {/* nav-header */}
            <div className='nav-header'>
              <h2>logo</h2>
              <button
                className='nav-toggle'
                onClick={() => setShowLinks(!showLinks)}
              >
                <FaBars />
              </button>
            </div>
            {/* nav-list */}
            <div className='nav-list' ref={linkContainer}>
              <ul ref={linkRef}>
                {link.map((link_) => {
                  return (
                    <li key={link_.id}>
                      <a href={link_.url} onClick={handleClick}>
                        {link_.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

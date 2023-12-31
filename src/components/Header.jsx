import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

const Header = ({ searchQuery, handleSearch }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={`py-4 sticky top-0 left-0 z-50 shadow-sm bg-opacity-50 lg:bg-opacity-20 backdrop-filter backdrop-blur-md backdrop-saturate-100`}
    >
      <Container>
        {isMobile ? (
          <>
            <div className="flex items-center text-tertiary">
              <div className="flex-1">
                <p className="text-2xl text-custom-txt tracking-tighter font-medium">
                  per.<span className="text-custom-btn-secondary">notes</span>
                </p>
              </div>
              <ThemeToggle />
            </div>
            <div className="mt-4">
              <SearchBar
                searchQuery={searchQuery}
                handleSearch={handleSearch}
              />
            </div>
          </>
        ) : (
          <div className="flex justify-between items-center text-tertiary">
            <div>
              <p className="text-2xl text-custom-txt tracking-tighter font-medium">
                per.<span className="text-custom-btn-secondary">notes</span>
              </p>
            </div>
            <div className="w-1/3 -ml-16">
              <SearchBar
                searchQuery={searchQuery}
                handleSearch={handleSearch}
              />
            </div>
            <ThemeToggle />
          </div>
        )}
      </Container>
    </header>
  );
};

Header.propTypes = {
  searchQuery: PropTypes.string,
  handleSearch: PropTypes.func,
};

export default Header;

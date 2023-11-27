import { useState, useEffect } from "react"
import Container from "./Container"
import { FiMoon } from "react-icons/fi"
import SearchBar from "./SearchBar"

const Header = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    };

    handleResize();

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);

  return (
    <header className="gradient-bg py-4 sticky top-0 left-0 z-50 bg-opacity-80 backdrop-filter backdrop-blur-md backdrop-saturate-100 shadow-sm">
      <Container>
        {isMobile ? (
          <>
            <div className="flex items-center text-tertiary">
              <div className="flex-1">
                <p className="text-2xl text-custom-txt tracking-tighter  font-medium">per.notes</p>
              </div>
              <div className="flex-none text-custom-txt">
                <FiMoon size={24} />
              </div>
            </div>
            <div className="mt-4" >
              <SearchBar />
            </div>
          </>
        ) : (
          <div className="flex justify-between items-center text-tertiary">
            <div>
              <p className="text-2xl text-custom-txt tracking-tighter font-medium">per.notes</p>
            </div>
            <div className="w-2/5">
              <SearchBar />
            </div>
            <div className="btn btn-link p-0 text-custom-txt-primary">
              <FiMoon size={25} />
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header
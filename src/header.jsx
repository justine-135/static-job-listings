import BgHeaderMobile from "./images/bg-header-mobile.svg";
import BgHeaderDesktop from "./images/bg-header-desktop.svg";
import { useState, useEffect } from "react";
const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <header>
      {windowSize <= 375 ? (
        <img className="h-[155px] w-full" src={BgHeaderMobile} alt="" />
      ) : (
        <img className="h-[155px] w-full" src={BgHeaderDesktop} alt="" />
      )}
    </header>
  );
};

export default Header;

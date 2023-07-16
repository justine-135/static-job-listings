import { ReactComponent as BgHeaderMobile } from "./images/bg-header-mobile.svg";
import { ReactComponent as BgHeaderDesktop } from "./images/bg-header-desktop.svg";
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
      {windowSize <= 375 ? <BgHeaderMobile /> : <BgHeaderDesktop />}
    </header>
  );
};

export default Header;

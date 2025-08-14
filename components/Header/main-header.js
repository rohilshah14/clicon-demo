import classes from "./main-header.module.css";
import HeaderTop from "./header-top";
import HeaderBottom from "./header-bottom";
import { useEffect, useState } from "react";

export default function MainHeader() {
  // const [isSticky, setIsSticky] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsSticky(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <div className={classes["header-wrap"]}>
      {/* <header className={`${classes.header} ${isSticky ? classes.sticky : ""}`}> */}
      <header className={classes.header}>
        <HeaderTop />
        <HeaderBottom />
      </header>
    </div>
  );
}

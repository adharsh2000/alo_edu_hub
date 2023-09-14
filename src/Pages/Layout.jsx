import { useEffect } from "react";

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>{children}</div>;
};

export default Layout;

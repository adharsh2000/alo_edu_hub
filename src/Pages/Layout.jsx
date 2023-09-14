import { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;

import { useEffect } from "react";

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>{children}</div>;
};

export default Layout;

// import { useEffect, useState } from "react";
// import Spinner from "../Components/Spinner";

// /* eslint-disable react/prop-types */
// const Layout = ({ children }) => {
//     const [playAnimation, setPlayAnimation] = useState(true);

//     // This will run one time after the component mounts
//     useEffect(() => {
//       const onPageLoad = () => {
//         setPlayAnimation(false);
//       };
  
//       // Check if the page has already loaded
//       if (document.readyState === 'complete') {
//         onPageLoad();
//       } else {
//         window.addEventListener('load', onPageLoad);
//         // Remove the event listener when component unmounts
//         return () => window.removeEventListener('load', onPageLoad);
//       }
//     }, []);

//   return <div>{playAnimation ? <Spinner /> : <div>{children}</div>}</div>;
// };

// export default Layout;


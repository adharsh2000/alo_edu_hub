// import { useSpring, animated } from "react-spring";

// const Counter = ({ num }) => {
//   function Number({ num }) {
//     const { number } = useSpring({
//       from: { number: 0 },
//       number: num,
//       delay: 500,
//       config: { mass: 1, tension: 20, friction: 10 },
//     });
//     return <animated.div>{number.to((num) => num.toFixed(0))}</animated.div>;
//   }
//   return (
//     <h1>
//       <Number num={num} />
//     </h1>
//   );
// };

// export default Counter;

import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

function useIsVisible(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
}

/* eslint-disable react/prop-types */
const Counter = ({ num }) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  const { number } = useSpring({
    from: { number: 0 },
    number: isVisible ? num : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <h1 ref={ref}>
      {isVisible ? (
        <animated.div>{number.to((num) => num.toFixed(0))}</animated.div>
      ) : (
        "0"
      )}
    </h1>
  );
};

export default Counter;

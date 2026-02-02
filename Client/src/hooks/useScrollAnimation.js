import { useEffect, useState, useRef } from "react";

const useScrollAnimation = (animationClass = "animate-fadeInUp", rootMargin = "0px") => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // animate only once
        }
      },
      { rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return [ref, isVisible ? animationClass : ""];
};

export default useScrollAnimation;

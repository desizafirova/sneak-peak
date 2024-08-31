import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(
  threshold = 0.1,
  root = null,
  rootMargin = '0px'
) {
  const [isIntersecting, setIsIntersecting] = useState(true);
  const observerRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root,
      rootMargin,
      threshold,
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, root, rootMargin]);

  const observe = (element) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  const unobserve = (element) => {
    if (element && observerRef.current) {
      observerRef.current.unobserve(element);
    }
  };

  return { isIntersecting, observe, unobserve };
}

export default useIntersectionObserver;

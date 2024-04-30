import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollTop ? 'down' : 'up';

      if ((scrollY - lastScrollTop > 10 || scrollY - lastScrollTop < -10)) {
        setScrollDirection(direction);
        setLastScrollTop(scrollY);
      }
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [lastScrollTop]);

  return scrollDirection;
};

export default useScrollDirection;

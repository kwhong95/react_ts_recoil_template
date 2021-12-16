import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce'

export const useScrollY = () => {
  const [scrollY, updateScrollY] = useState<number>(0);

  const listner = () => {
    updateScrollY(window.pageYOffset);
  }

  const delay = 15;

  useEffect(() => {
    window.addEventListener('scroll', debounce(listner, delay));
    return () => {
      window.removeEventListener('scroll', listner);
    }
  })

  return { scrollY }
}

export default useScrollY;
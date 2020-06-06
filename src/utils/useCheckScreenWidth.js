import {useState, useEffect} from 'react';

function useCheckMobileScreen(breakPoint = 768) {
  const [isScreenMobile, setIsScreenMobile] = useState(
    window.innerWidth >= breakPoint ? false : true
  );

  function checkScreenWidth() {
    return window.innerWidth >= breakPoint
      ? setIsScreenMobile(false)
      : setIsScreenMobile(true);
  }

  useEffect(() => {
    window.addEventListener('resize', checkScreenWidth);
    // eslint-disable-next-line
  }, []);

  return isScreenMobile;
}

export default useCheckMobileScreen;

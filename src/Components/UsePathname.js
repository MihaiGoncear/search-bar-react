import { useLocation } from 'react-router-dom';

export const usePathname = () => {
    const location = useLocation();
    console.log(location)
    return location.pathname
  }
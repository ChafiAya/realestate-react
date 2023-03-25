import React from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';

export default function Header() {
  const location = useLocation();
const navigate = useNavigate();
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="logo" 
            className="h-5 cursor-pointer"/>             
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className={`cursor-pointer py-3 text-sm font-semibold ${location.pathname === '/' ? 'text-black border-b-2 border-blue-500' : 'text-gray-400 border-b-2 border-transparent'}`}
             onClick={() => navigate("/")}>
              Home 
            </li>
            <li className={`cursor-pointer py-3 text-sm font-semibold ${location.pathname === '/offers' ? 'text-black border-b-2 border-blue-500' : 'text-gray-400 border-b-2 border-transparent'}`}
              onClick={() => navigate("/offers")}>
              Offers
            </li>
            <li className={`cursor-pointer py-3 text-sm font-semibold ${location.pathname === '/about-us' ? 'text-black border-b-2 border-blue-500' : 'text-gray-400 border-b-2 border-transparent'}`}
            onClick={() => navigate("/about-us")}>
              About us
            </li>
            <li className={`cursor-pointer py-3 text-sm font-semibold ${location.pathname === '/sign-in' ? 'text-black border-b-2 border-blue-500' : 'text-gray-400 border-b-2 border-transparent'}`}
            onClick={() => navigate("/sign-in")}>
    
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

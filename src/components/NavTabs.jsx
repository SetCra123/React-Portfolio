import { Link, useLocation } from 'react-router-dom';
import NavigationLinks from './NavigationLinks';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-pills nav-fill nav box">
            {/* <li className="nav-item">
                <Link 
                  to="/"
                  className={currentPage === '/' ? 'nav-link active' : 'nav-link'} >Home</Link>
                  </li>
            <li className="nav-item">
                <Link 
                 to="/Portfolio"
                 className={currentPage === '/' ? 'nav-link active' : 'nav-link'} >Portfolio</Link>
                 </li>
            <li className="nav-item">
                <Link 
                 to="/Resume"
                 className={currentPage === '/' ? 'nav-link active' : 'nav-link'} >Resume</Link>
                 </li>
                 <li className="nav-item">
            <Link 
                 to="/Contact"
                 className={currentPage === '/' ? 'nav-link active' : 'nav-link'} >Contact</Link>
                 </li> */} <NavigationLinks />
        </ul>
        
    );
}



export default NavTabs;
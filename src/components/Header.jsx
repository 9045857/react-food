import { Link } from "react-router-dom";
import { Menu } from "./Menu";

function Header() {
    return (
        <>
            <Menu />
            <nav className='#546e7a blue-grey darken-1'>
                <div className='nav-wrapper'>
                    <Link
                        to='/'
                        className='brand-logo'
                    >
                        React Meal
                    </Link>
                    <ul
                        id='nav-mobile'
                        className='right hide-on-med-and-down'
                    >
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export { Header };

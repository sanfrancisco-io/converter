import { NavLink } from 'react-router-dom';

import classes from './main_navigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? classes.active : ''
                            }
                            end
                        >
                            List Of Currencies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/converter'
                            className={({ isActive }) =>
                                isActive ? classes.active : ''
                            }
                            end
                        >
                            Converter
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;

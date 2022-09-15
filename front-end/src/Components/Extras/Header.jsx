import style from '../../cssModules/Header.module.css';

import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className={style.Header}>
            <Link to='/'>Home</Link>
            <Link to='/driversPage'>For Drivers</Link>
            <Link to='/managersPage'>For Managers</Link>
        </div>
    )
};

export default Header;
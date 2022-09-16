import style from '../../cssModules/Header.module.css';

import {useNavigate} from 'react-router-dom';

const Header = () => {
    
    const navigator = useNavigate();
    
    return (
        <div className={style.Header}>
            
            <div className={style.Logo}>
                <h1 onClick={() => navigator('/')}>Qommon!</h1>
            </div>
            
            <div className={style.HeaderButtons}>
                <button type="button" onClick={() => navigator('/')}>Home</button>
                <button type="button" onClick={() => navigator('/driversPage')}>Driver's Page</button>
                <button type="button" onClick={() => navigator('/managersPage')}>Manager's Page</button>
            </div>
            
        </div>
    )
};

export default Header;
import { useNavigate } from "react-router-dom";

import style from '../../cssModules/ManagersPage.module.css';

const ManagersPage = () => {
    
    const navigator = useNavigate();
    
    return (
        <div className={style.Managers}>
            <h1>Welcome to the Manager's Page</h1>
            <hr />

            <p>To assign packages to deliveries, click here!</p>
            <button type="button" onClick={() => navigator('/packagesPage')}>Packages to Deliveries</button>
            <p>To assign deliveries to drivers, click here!</p>
            <button type="button" onClick={() => navigator('/deliveriesPage')}>Deliveries to Drivers</button>
        </div>
    )
};

export default ManagersPage;

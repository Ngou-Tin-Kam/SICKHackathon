import style from '../../cssModules/HomePage.module.css';

const HomePage = () => {
    return (
        <div className={style.WelcomeText}>
            <h1>Welcome to Qommon Logistics</h1>
            <h3>Our speciality is providing exceptional delivery services to individuals and businesses</h3>
        </div>
    )
};

export default HomePage;
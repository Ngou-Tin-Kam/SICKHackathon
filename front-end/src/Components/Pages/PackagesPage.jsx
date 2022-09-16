import { useNavigate } from 'react-router-dom';

const PackagesPage = () => {

    const navigator = useNavigate();

    return (
        <div>
            <button type='button' onClick={() => navigator('/managersPage')}>{'<<<'}</button>
            <h1>Look at all of those packages!!!</h1>
        </div>
    )

};

export default PackagesPage;
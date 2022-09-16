import { useNavigate } from "react-router-dom";

const DeliveriesPage = () => {

    const navigator = useNavigate();

    return (
        <div>
            <button type='button' onClick={() => navigator('/managersPage')}>{'<<<'}</button>
            <h1>Look at all of those deliveries!!!</h1>
        </div>
    )

};

export default DeliveriesPage;
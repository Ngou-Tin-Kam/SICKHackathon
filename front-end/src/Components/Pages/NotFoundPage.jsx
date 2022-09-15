import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h1>PAGE NOT FOUND</h1>
            <Link to="/">Go Home!</Link>
        </div>
    )
};

export default NotFoundPage;
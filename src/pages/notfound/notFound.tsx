// import { useHistory } from 'react-router-dom';

const NotFound = () => {
    // const history = useHistory();

    // const handleGoHome = () => {
    //     history.push('/'); // Adjust this route if your home page route is different.
    // };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 Page">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="mt-4 text-xl text-gray-700">Oops! Page not found.</p>
            <button
               
                className="mt-6 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Return to Home
            </button>
        </div>
    );
};

export default NotFound;
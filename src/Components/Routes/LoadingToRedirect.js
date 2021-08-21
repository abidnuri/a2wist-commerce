import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const LoadingToRedirect = () => {
    const [count, setCount] = useState(5);
    let history = useHistory();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000)
        //redirect once count is equal to 0
        count === 0 && history.push('/');

        //cleaning interval 
        return () => clearInterval(interval);
    }, [count])
    return (
        <div>
            <h1 className="mt-32 text-4xl text-center text-red-700">Redirecting you to in {count} seconds</h1>
        </div>
    );
};

export default LoadingToRedirect;
import { useEffect, useState } from 'react';

export const useFetch = () => {

    const [responce, setResponce] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async() => {
            try {
                const json = await fetch('https://6075786f0baf7c0017fa64ce.mockapi.io/products');
                const res = await json.json();
                setResponce(res);
            } catch (err) {
                setError(err);
            }
        })();
    }, []);

    return { responce, error };
};
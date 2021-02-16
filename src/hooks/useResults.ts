import { useEffect, useState } from 'react';
import yelpi from '../api/yelpi';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async(searchTerm: string) => {
        try {
            const results = await yelpi.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                }
            });
            setResults(results.data.businesses);
        }catch(e){
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchAPI('pasta')
    }, [])

    return [searchAPI, results, errorMessage] as const;
}
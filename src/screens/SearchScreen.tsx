import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import SearchBar from '../components/SearchBar';

import yelpi from '../api/yelpi';



const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async() => {
        try {
            const results = await yelpi.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose',
                }
            });
            setResults(results.data.businesses);
        }catch(e){
            setErrorMessage('Something went wrong')
        }
    }

    return <View>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmitted={searchAPI}
        />
        { errorMessage ? <Text>{errorMessage}</Text> : null }
        <Text>We have found {results.length} results</Text>
    </View>
}

const styles = StyleSheet.create({})

export default SearchScreen

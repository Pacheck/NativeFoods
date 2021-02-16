import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ResultList from '../components/ResultList/ResultList';

import SearchBar from '../components/SearchBar/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchAPI, results, errorMessage] = useResults();

  const filterResultByPrice = (price: string) => {
    return results.filter((result: any) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={() => searchAPI(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultList results={filterResultByPrice('$')} title="Cost Effective" />
        <ResultList results={filterResultByPrice('$$')} title="Bit Pricier" />
        <ResultList results={filterResultByPrice('$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

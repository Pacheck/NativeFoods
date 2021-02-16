import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import { ITitle } from './type';

import ResultCard from "../ResultCard";

const ResultList = ({ title, results }: ITitle) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal 
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => <ResultCard result={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultList;

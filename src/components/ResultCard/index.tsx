import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { ICardProps } from './type';

//Stephen used 'ResultDetail' i named the function as ResultCard
const ResultCard = ({ result }: ICardProps) => {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ResultCard;

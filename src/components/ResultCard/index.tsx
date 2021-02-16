import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import {HeaderHeightContext} from 'react-navigation-stack';

import {ICardProps} from './type';

//Stephen used 'ResultDetail' i named the function as ResultCard
const ResultCard = ({result}: ICardProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.cardImage} source={{uri: result.image_url}} />
      <Text style={styles.cardName}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  cardName: {
    fontWeight: 'bold',
  },
  container: {
    marginLeft: 15,
  }
});

export default ResultCard;

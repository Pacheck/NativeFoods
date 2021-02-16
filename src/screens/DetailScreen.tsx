import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import yelpi from '../api/yelpi';

import { IDetailNavProp, IResult } from './type';

const DetailScreen = ({ navigation }: IDetailNavProp) => {
  const [result, setResult] = useState<IResult>();
  const id = navigation.getParam('id');

  const getResult = async (id: string) => {
    const response = await yelpi.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.Image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: 300,
    height: 200,
  },
});

export default DetailScreen;

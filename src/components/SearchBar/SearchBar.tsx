import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

interface ISearchProps {
  term: string;
  onTermChange: (newTerm: string) => void;
  onTermSubmitted: () => void;
}

interface ISearchProps {
  term: string;
  // onTermChange: ( newTerm: string ) => void
}

const SearchBar = ({term, onTermChange, onTermSubmitted}: ISearchProps) => {
  return (
    <View style={styles.searchBar}>
      <Icon name="search1" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmitted}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#F0EEEE',
    marginHorizontal: 20,
    borderRadius: 5,
    height: 50,
    flexDirection: 'row',
    marginTop: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;

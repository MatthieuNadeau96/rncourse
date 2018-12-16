import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const inputContainer = (props) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.placeInput}
      value={props.placeName}
      onChangeText={props.placeNameChangedHandler}
      placeholder="An awesome place"
      />
    <Button
      onPress={props.placeSubmitHandler}
      title="Add"
      style={styles.placeButton}
      />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
})

export default inputContainer;

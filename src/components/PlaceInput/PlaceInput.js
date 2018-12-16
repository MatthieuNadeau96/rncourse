import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (val) => {
    this.setState({placeName: val})
  }

  placeSubmitHandler = () => {
    if( this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName)
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          placeholder="An awesome place"
          />
        <Button
          onPress={this.placeSubmitHandler}
          title="Add"
          style={styles.placeButton}
          />
      </View>
    )
  }
};

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

export default PlaceInput;

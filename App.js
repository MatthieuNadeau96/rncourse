import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = (val) => {
    this.setState({placeName: val})
  }

  placeSubmitHandler = () => {
    if( this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })

  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <Text key={i} >{place}</Text>
    ))
    return (
       <View style={styles.container}>
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
         <View>
           <View>{placesOutput}</View>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
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
  }
});

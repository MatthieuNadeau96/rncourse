import React from 'react';

import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => {

  let modalContent = null;

  if(props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.placeImage}/>
        <Text style={styles.placeName}>{props.selectedPlace.value}</Text>
      </View>
    )
  }

  return (
    <Modal onRequestClosed={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
      <View>
        {modalContent}
        <View style={styles.modalContainer}>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
})

export default placeDetail;

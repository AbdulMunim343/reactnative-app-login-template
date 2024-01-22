import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Card, Text, Appbar } from 'react-native-paper';


export default function Dashboard({ navigation }) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Action icon="arrow-left" onPress={() => { }} />
        <Appbar.Content title="List" />
      </Appbar.Header>
      <View style={styles.container}>
        <Card>
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
      </Card>
      </View>
      
    </>



  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
  },
})

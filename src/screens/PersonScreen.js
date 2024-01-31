import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Text, Appbar, Icon } from 'react-native-paper';
import axiosConfig from '../configs/axiosConfig';


export default function PersonScreens({ route, navigation }) {
  const { Id } = route.params;
  const [person, setPerson] = useState({})
  useEffect(() => {
    console.log(Id)
    getData();
  }, [])

  const getData = () => {
    axiosConfig.get(`/users/${Id}`).then((res) => {
      console.log(res);
      setPerson(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={person.name} />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.mCard}>
            <Card.Cover style={styles.mb8} source={{ uri: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} />
            <Card.Content style={styles.mb8}>
              <Text variant="titleLarge">About Me</Text>
              <Text variant="bodyLarge">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </Card.Content>

            <Card style={styles.mb8}>
              <Card.Content style={styles.cardCon}>
                <Icon source="account" size={25}></Icon>
                <Text variant="titleMedium" style={styles.ml10}>{person.username}</Text>
              </Card.Content>
            </Card>

            <Card style={styles.mb8}>
              <Card.Content style={styles.cardCon}>
                <Icon source="email" size={25}></Icon>
                <Text variant="titleMedium" style={styles.ml10}>{person.email}</Text>
              </Card.Content>
            </Card>

            <Card style={styles.mb8}>
              <Card.Content style={styles.cardCon}>
                <Icon source="phone" size={25}></Icon>
                <Text variant="titleMedium" style={styles.ml10}>{person.phone}</Text>
              </Card.Content>
            </Card>

            <Card style={styles.mb8}>
              <Card.Content style={styles.cardCon}>
                <Icon source="web" size={25}></Icon>
                <Text variant="titleMedium" style={styles.ml10}>{person.website}</Text>
              </Card.Content>
            </Card>

            <Card style={styles.mb8}>
              <Card.Content style={styles.cardCon}>
                <Icon source="home" size={25}></Icon>
                <Text variant="titleMedium" style={styles.ml10}>{person.address ? person.address.street :''}, {person.address ? person.address.city :''}</Text>
              </Card.Content>
            </Card>
          
          </Card>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%'
  },

  mCard: {
    padding: 10
  },

  cardCon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },

  mb8: {
    marginBottom: 8
  },

  ml10: {
    marginLeft: 10
  }
})
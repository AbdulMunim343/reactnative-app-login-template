import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Text, Appbar, Icon } from 'react-native-paper';
import axiosConfig from '../configs/axiosConfig';


export default function Dashboard({ navigation }) {

  const [data, setData] = useState([])
  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    axiosConfig.get('/users').then((res) => {
      console.log(res);
      setData(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Persons" />
      </Appbar.Header>
      <View style={styles.container}>
        <ScrollView>
          {data.map((res, i) => {
            return (

              <Card style={styles.list} key={i}>
                <Card.Content style={styles.cardCon}>
                  <Text variant="titleMedium">{res.name}</Text>
                  <TouchableOpacity onPress={()=>navigation.navigate('PersonScreen')}>
                    <Icon source="chevron-right" size={25}></Icon>
                  </TouchableOpacity>
                </Card.Content>
              </Card>

            )
          })}
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    width: '100%',
  },

  list: {
    marginBottom: 10
  },

  cardCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }
})

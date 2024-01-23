import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Appbar } from 'react-native-paper';
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
        <Appbar.Content title="Dashboard" />
      </Appbar.Header>
      <View style={styles.container}>
        {data.map((res) => {
            return(
              <Card style={styles.list}>
              <Card.Content>
                <Text variant="titleMedium">{res.name}</Text>
              </Card.Content>
            </Card>
            )
        })}
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

  list:{
    marginBottom:10
  }
})

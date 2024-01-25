import React, { useState,useEffect } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Text, Appbar, Icon } from 'react-native-paper';
import axiosConfig from '../configs/axiosConfig';


export default function Person({navigation }) {
    const [person, setPerson] = useState([])
    useEffect(() => {
      getData();
    }, [])
  
    const getData = () => {
      axiosConfig.get(`/users/${itemId}`).then((res) => {
        console.log(res);
       // setData(res.data)
      }).catch((error) => {
        console.log(error)
      })
    }
  
    return (
      <>
        <Appbar.Header>
          <Appbar.Content title="hello" />
        </Appbar.Header>
        <View style={styles.container}>
          <ScrollView>
                <Card style={styles.list}>
                  <Card.Content style={styles.cardCon}>
      
                  </Card.Content>
                </Card>
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
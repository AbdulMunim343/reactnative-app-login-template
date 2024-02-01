import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Text, Appbar, Icon } from 'react-native-paper';


export default function Dashboard({ navigation }) {
const [data, setData] = useState([
  { name: 'Object 1', icon: 'account' },
  { name: 'Object 2', icon: 'book' },
  { name: 'Object 3', icon: 'car' },
  { name: 'Object 4', icon: 'camera' },
  { name: 'Object 5', icon: 'coffee' },
  { name: 'Object 6', icon: 'cellphone' }
])
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Dashboard" />
      </Appbar.Header>
      
        <ScrollView>
        <View style={styles.container}>
      {data.map((res,i)=>{
        return(
          <Card style={styles.cardCon}>
                <Card.Content>
                  <TouchableOpacity>
                    <Icon source={res.icon} size={70}></Icon>
                  </TouchableOpacity>
                  <Text variant="titleLarge">{res.name}</Text>
                </Card.Content>
              </Card>   
        ) 
      })}
                         
        </View>
        </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },

  content: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },

  cardCon: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '45%',
    textAlign: 'center',
    height: 210
  }
})

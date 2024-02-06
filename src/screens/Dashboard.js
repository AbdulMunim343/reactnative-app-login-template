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
          <Card style={styles.cardCon} key={i}>
                <Card.Content style={styles.content}>
                  <TouchableOpacity style={styles.content} onPress={()=>navigation.navigate('ListScreen')}>
                    <Icon source={res.icon} size={70}></Icon>
                    <Text variant="titleLarge">{res.name}</Text>
                  </TouchableOpacity>
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
    alignItems:'center',
    height:'100%',
    width:'100%'
  },

  cardCon: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '45%',
    height: 210
  },
})

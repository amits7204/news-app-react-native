import React, {useState} from 'react'
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      name: "Amit Singh"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      name: 'Singh'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      name: 'Rahul'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb36ba',
      title: 'Fourth Item',
      name: 'Kumar'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa327f63',
      title: 'fifth Item',
      name: 'Deepak'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e563d72',
      title: 'sixth Item',
      name: 'sunil'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad43abb36ba',
      title: 'seven Item',
      name: 'jai'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd421aa327f63',
      title: 'eight Item',
      name: 'karan'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145541e563d72',
      title: 'nine Item',
      name: 'arjun'
    },
  ];

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

export default function News({navigation}){
    const [selectedId, setSelectedId] = useState()

    const onSelected = (item)=>{
      console.log("ID: ",item.id)
      navigation.navigate('descriptions', item.name)
    }

    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
      return(
        <Item
          item={item}
          onPress={()=>onSelected(item)}
          style={{backgroundColor}}
          />
      )
    }
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        width: '100%',
        
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 16,
    },
    title: {
        fontSize: 32,
  },
})

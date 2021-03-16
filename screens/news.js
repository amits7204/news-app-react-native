import React, {useState, useEffect} from 'react'
import {SafeAreaView, View, FlatList, StyleSheet, Text, Image, StatusBar, TouchableOpacity} from 'react-native'

import {useSelector, useDispatch} from 'react-redux'
import {newsGetRequest} from '../redux/actionCreator'

  

export default function News({navigation}){
    const [selectedId, setSelectedId] = useState()

    
    const dispatch = useDispatch()
    const {isLoading, allData} = useSelector((state)=> state.reducer)
    console.log("SELECTOR: ", allData.articles)
    useEffect(()=>{
      dispatch(newsGetRequest())
      // console.log("SELECTOR: ", selector)
    },[dispatch])

    const Item = ({ item, onPress, style }) => (
      // <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View onPress={onPress} style={[styles.item, style]}>
        <Image resizeMode='cover' source={{uri: item.urlToImage}} style={styles.urlImage}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.newsDesc}>{item.description}</Text>
      </View>
      // </TouchableOpacity>
    );
    const onSelected = (item)=>{
      console.log("ID: ",item.id)
      navigation.navigate('descriptions', item.name)
    }

    const renderItem = ({ item }) => {
      const backgroundColor = item.title === selectedId ? "#f9c2ff" : "#FFFFFF";
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
                data={allData.articles}
                renderItem={renderItem}
                keyExtractor={item => item.title}
                extraData={selectedId}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        width: '100%',
        
    },
    item: {
        backgroundColor: '#f9c2ff',
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 16,
        paddingBottom: 20
    },
    title: {
        fontSize: 18,
        margin: 6,
        color: "#000000",
        fontWeight: 'bold'

  },
  urlImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  }, 
  newsDesc: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#000000",
    margin: 6
  }
})

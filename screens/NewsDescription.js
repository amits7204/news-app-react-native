import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function NewsDescription({route}){
    console.log("PROPS: ", route.params)
    return(<View style={styles.container}>
        <Text>{route.params}</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
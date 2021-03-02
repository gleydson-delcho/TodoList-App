import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';


import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Home() {
    
    const [ response, setResponse ] = useState([])
    
    const navigation = useNavigation();
    function handleNavigateToForm(){
        navigation.navigate('FormList');
    }
    

    useEffect(()=>{
        async function showData() {  
            let response = ''
            try {
                response = await AsyncStorage.getItem('@TODO') || []
                let data = JSON.parse(response);
                setResponse(data);
                console.log(data)
                
            } catch (error) {
                alert(error)
            }
        }showData();
    },[]);
    
    
    return(
        <View style={styles.container}>            
            <FlatList 
                data={response}
                renderItem={({item}) => { return <Text style={styles.textItem}>{item.todo} - {item.description }</Text>
                }}
                keyExtractor={(item, index) => {return index.toString()}}  
            />
            <TouchableOpacity style={styles.button} onPress={handleNavigateToForm}>
                <Text style={styles.textButton} >Add Tarefas</Text>
            </TouchableOpacity>            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {        
        marginTop: 30, 
    },
    button:{        
        backgroundColor: '#4040ff',
        alignItems: 'center',
        padding:15,
        borderRadius: 20,        
        marginHorizontal: 18,
        marginTop: 50,                
    },
    textButton: {
        color: '#fff',
    },
    textItem: {
        padding: 1,
        marginTop: 30,
        color: 'black',       
    }
  });
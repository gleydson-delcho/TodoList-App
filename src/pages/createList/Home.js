import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';


import { View, Text, StyleSheet } from 'react-native';
import { FlatList, RectButton } from 'react-native-gesture-handler';


export default function Home() {    
        
    
    const navigation = useNavigation();
    function handleNavigateToForm(){
        navigation.navigate('FormList');
    }
    return(
        <View style={styles.container}>
            <FlatList data={''} renderItem={''} />

            <RectButton style={styles.button} onPress={handleNavigateToForm}>
                <Text style={styles.textButton} >Add Tarefas</Text>
            </RectButton>
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
    }
  });
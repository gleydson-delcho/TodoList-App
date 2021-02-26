import React, { useState } from 'react';

import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';


export default function FormList() { 

        const [todo, setTodo] = useState('');
        const [description, setDescription] = useState('');

       function handleCreateTodo(){
           const data = new FormData();
           
           data.append('todo', todo);
           data.append('description', description);
       }
        
        return (
            <ScrollView style={styles.container}>
                
                <Text style={styles.title}>Dados</Text>

                <Text style={styles.label}>Tarefa</Text>
                <TextInput style={[styles.input, {height: 50}]} value={todo} onChangeText={setTodo} />

                <Text style={styles.label}>Descrição</Text>
                <TextInput style={[styles.input, {height: 110}]} value={description} onChangeText={setDescription} multiline />

                <RectButton style={styles.button} onPress={handleCreateTodo}>
                    <Text style={styles.textButton} >Cadastrar</Text>
                </RectButton>

            </ScrollView>
        );
    
}

const styles = StyleSheet.create({
    container: {        
        marginTop: 30, 
    },    
    title:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '300',         
    },
    label:{
        padding:10,
        fontSize: 20,
    },
    input:{   
        margin: 10,        
        borderWidth: 1.5,
        borderRadius:16,
        paddingVertical:18,
        paddingHorizontal: 24,
        backgroundColor: '#fff',
        marginBottom: 16,
        textAlignVertical: 'top',        
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
        fontSize: 30,
        
    },
  });
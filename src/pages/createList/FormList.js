import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Text, TextInput, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
// import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export default class FormList extends Component { 


    constructor(props){
        super(props);
        this.state = {
            todo: '',            
            description: '',            
        }
    }

    onChangeTodo(todo) {
        this.setState({todo});
    }

    onChangeDesc (description) {
        this.setState({description});
    }
    
    async handleCreateTodo(){
       try {
           await AsyncStorage.setItem('@TODO', 
                JSON.stringify([{ todo: this.state.todo, description: this.state.description}]));

           Keyboard.dismiss();
           Alert.alert("Sucesso", "Tarefa salva com sucesso!");
       } catch (error) {
           alert(error)
       } 
       
       const {navigation} = this.props;
    function handleNavigateToHome(){
        navigation.navigate('Home');
    }handleNavigateToHome();
   }
    render(){ 
        return (
            <View style={styles.container}>
                
                <Text style={styles.title}>Dados</Text>

                <Text style={styles.label}>Tarefa</Text>
                <TextInput style={[styles.input, {height: 50}]} 
                    value={this.state.todo} 
                    onChangeText={(txtTodo) => {this.onChangeTodo(txtTodo)}}                    
                    autoFocus
                />

                <Text style={styles.label}>Descrição</Text>
                <TextInput style={[styles.input, {height: 110}]} 
                    value={this.state.description} 
                    onChangeText={(txtDesc) =>{this.onChangeDesc(txtDesc)}} 
                    multiline                     
                />

                <RectButton style={styles.button} onPress={() => this.handleCreateTodo()}>
                    <Text style={styles.textButton} >Cadastrar</Text>
                </RectButton>

            </View>
        );
    }    
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
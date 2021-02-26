import React from 'react';
import { ScrollView, Text, useState } from 'react-native';


export default function Details(){
    const [todo, setTodo] = useState();
    const [description, setDescription] = useState()


    return(
        <ScrollView>
                <Text style={styles.title}>Detalhes</Text>
            <View>
                <Text style={styles.text}>Tarefa:{todo}</Text>
                <Text style={styles.text}>Descrição:{description}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
        
    title:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '300',         
    },
    text:{
        fontSize:15,        
    },
});
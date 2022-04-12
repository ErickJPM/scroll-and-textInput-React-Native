
import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button ,TouchableOpacity,Image} from 'react-native';

function Parte2({ navigation }) {
    return (
      <ScrollView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <h1 style={{ color: 'gray' }}>Escolaridad</h1>
        </View>
        <View style={{borderColor:"black",borderStyle: 'solid',
              borderWidth: 3}}>
            <h2>Primaria</h2><br/>
            <label>Nombre de la primaria</label>
            <TextInput style={styles.input} placeholder='Escribe el nombre de tu primaria'/> <br/>
            <label>Direccion de la primaria</label>
            <TextInput style={styles.input} placeholder='Escribe la direccion de tu primaria'/> <br/>
            <label>Cantidad de años cursados</label>
            <TextInput style={styles.input} placeholder='¿Cuantos años cursaste?'/> <br/>
            <View style={{flex:1,flexDirection:"row"}}>
              <View style={{flex:1}}>
                <label for="inicio">De:  <input  id="inicio" type="date"></input></label>
                  
              </View>
              <View style={{flex:1}}>
                <label for="Fin"> A:  <input  id="Fin" type="date"></input></label>
                  
              </View>
            </View>
            <br/>
            <View>
              <label>Titulo recibido</label>
              <TextInput style={styles.input} placeholder='Titulo que recibiste' />
            </View>
            <br/>
            
        </View>
        <br/>
        <View style={{borderColor:"black",borderStyle: 'solid',
              borderWidth: 3}}>
            <h2>Secundaria o Prevocacional</h2><br/>
            <label>Nombre de la Secundaria</label>
            <TextInput style={styles.input} placeholder='Escribe el nombre de tu Secundaria'/> <br/>
            <label>Direccion de la Secundaria</label>
            <TextInput style={styles.input} placeholder='Escribe la direccion de tu Secundaria'/> <br/>
            <label>Cantidad de años cursados</label>
            <TextInput style={styles.input} placeholder='¿Cuantos años cursaste?'/> <br/>
            <View style={{flex:1,flexDirection:"row"}}>
              <View style={{flex:1}}>
                <label for="inicio">De:  <input  id="inicio" type="date"></input></label>
                  
              </View>
              <View style={{flex:1}}>
                <label for="Fin"> A:  <input  id="Fin" type="date"></input></label>
                  
              </View>
            </View>
            <br/>
            <View>
              <label>Titulo recibido</label>
              <TextInput style={styles.input} placeholder='Titulo que recibiste' />
            </View>
            <br/>
            
        </View>
        <br/>
        <View style={{borderColor:"black",borderStyle: 'solid',
              borderWidth: 3}}>
            <h2>Preparatoria o Vocacional</h2><br/>
            <label>Nombre de la Preparatoria</label>
            <TextInput style={styles.input} placeholder='Escribe el nombre de tu Preparatoria'/> <br/>
            <label>Direccion de la Preparatoria</label>
            <TextInput style={styles.input} placeholder='Escribe la direccion de tu Preparatoria'/> <br/>
            <label>Cantidad de años cursados</label>
            <TextInput style={styles.input} placeholder='¿Cuantos años cursaste?'/> <br/>
            <View style={{flex:1,flexDirection:"row"}}>
              <View style={{flex:1}}>
                <label for="inicio">De:  <input  id="inicio" type="date"></input></label>
                  
              </View>
              <View style={{flex:1}}>
                <label for="Fin"> A:  <input  id="Fin" type="date"></input></label>
                  
              </View>
            </View>
            <br/>
            <View>
              <label>Titulo recibido</label>
              <TextInput style={styles.input} placeholder='Titulo que recibiste' />
            </View>
            <br/>
            
        </View>
        <br/>
        <View style={{borderColor:"black",borderStyle: 'solid',
              borderWidth: 3}}>
            <h2>Profesional</h2><br/>
            <label>Nombre de la escuela Profesional</label>
            <TextInput style={styles.input} placeholder='Escribe el nombre de la escuela Profesional'/> <br/>
            <label>Direccion de la escuela Profesional</label>
            <TextInput style={styles.input} placeholder='Escribe la direccion de la escuela Profesional'/> <br/>
            <label>Cantidad de años cursados</label>
            <TextInput style={styles.input} placeholder='¿Cuantos años cursaste?'/> <br/>
            <View style={{flex:1,flexDirection:"row"}}>
              <View style={{flex:1}}>
                <label for="inicio">De:  <input  id="inicio" type="date"></input></label>
                  
              </View>
              <View style={{flex:1}}>
                <label for="Fin"> A:  <input  id="Fin" type="date"></input></label>
                  
              </View>
            </View>
            <br/>
            <View>
              <label>Titulo recibido</label>
              <TextInput style={styles.input} placeholder='Titulo que recibiste' />
            </View>
            <br/>
            
        </View>
        <br/>
        <View style={{borderColor:"black",borderStyle: 'solid',
              borderWidth: 3}}>
            <h2>Comercial u otras</h2><br/>
            <label>Nombre de la escuela Comercial</label>
            <TextInput style={styles.input} placeholder='Escribe el nombre de la escuela Comercial'/> <br/>
            <label>Direccion de la escuela Comercial</label>
            <TextInput style={styles.input} placeholder='Escribe la direccion de la escuela Comercial'/> <br/>
            <label>Cantidad de años cursados</label>
            <TextInput style={styles.input} placeholder='¿Cuantos años cursaste?'/> <br/>
            <View style={{flex:1,flexDirection:"row"}}>
              <View style={{flex:1}}>
                <label for="inicio">De:  <input  id="inicio" type="date"></input></label>
                  
              </View>
              <View style={{flex:1}}>
                <label for="Fin"> A:  <input  id="Fin" type="date"></input></label>
                  
              </View>
            </View>
            <br/>
            <View>
              <label>Titulo recibido</label>
              <TextInput style={styles.input} placeholder='Titulo que recibiste' />
            </View>
            <br/>
            
        </View>
        <br/>
        <View style={{alignItems:"end"}}>
            <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button2} onPress={() =>{
                        navigation.navigate('Empleo actual y anteriores');
                    }}>
                        <Text style={{color:'black'}}> Siguiente</Text>
                    </TouchableOpacity>
                </View>
        </View>
        
        
      </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1EE8DA'
    },
  
    input: {
      backgroundColor: 'white',
      color: 'black',
      borderLeftColor: 'white',
      borderRadius: 15
    },
  
    button:{borderRadius:10,
      alignItems:"center",
      justifyContent:"center", 
      height: 50,
      width:100,
      backgroundColor:"#11B3B3",
      resizeMode:"contain"
    },
    button2:{borderRadius:10,
        alignItems:"center",
        justifyContent:"center", 
        height: 50,
        width:100,
        backgroundColor:"#DAF7A6",
        resizeMode:"contain"
      },
    buttonContainer:{
      flex:1,
      alignItems:"center"
    }
    
  
  });

  export default Parte2;
  
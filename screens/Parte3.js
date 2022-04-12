
import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button ,TouchableOpacity,Image} from 'react-native';

function Parte3({ navigation }) {
    return (
      <ScrollView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <h1 style={{ color: 'gray' }}>Empleo actual y anteriores</h1>
        </View>
        <View style={{borderColor:"black",borderStyle: 'solid',
              borderWidth: 3}}>
            <h2>Empleo actual o ultimo</h2><br/>
            <label>Tiempo que presto sus servicios</label>
            <TextInput style={styles.input} placeholder='Tiempo que presto sus servicios' />
            <br/>
            <label>Nombre de la compañia</label>
            <TextInput style={styles.input} placeholder='Compañia' />
            <br/>
            <label>Direccion de la compañia</label>
            <TextInput style={styles.input} placeholder='Dirección' />
            <br/>
            <label>Telefono de la compañia</label>
            <TextInput style={styles.input} placeholder='telefono celular/oficina' />
            <br/>
            <label>Puesto desempeñado</label>
            <TextInput style={styles.input} placeholder='Puesto' />
            <br/>
            <label>Sueldo</label>
            <TextInput style={styles.input} placeholder='$0.00' />
            <br/>
            <label>Motivo de separación</label>
            <TextInput style={styles.input} placeholder='Causa de renuncia o despido' />
            <br/>
            <label>Nombre de su jefe directo</label>
            <TextInput style={styles.input} placeholder='Nombre completo de jefe' />
            <br/>
            <label>Puesto de su jefe directo</label>
            <TextInput style={styles.input} placeholder='Puesto de jefe' />
            <br/>
        </View>
        <br/>
        <View style={{borderColor:"black",borderStyle: 'solid',
              borderWidth: 3}}>
            <h2>Empleo Anterior</h2><br/>
            <label>Tiempo que presto sus servicios</label>
            <TextInput style={styles.input} placeholder='Tiempo que presto sus servicios' />
            <br/>
            <label>Nombre de la compañia</label>
            <TextInput style={styles.input} placeholder='Compañia' />
            <br/>
            <label>Direccion de la compañia</label>
            <TextInput style={styles.input} placeholder='Dirección' />
            <br/>
            <label>Telefono de la compañia</label>
            <TextInput style={styles.input} placeholder='telefono celular/oficina' />
            <br/>
            <label>Puesto desempeñado</label>
            <TextInput style={styles.input} placeholder='Puesto' />
            <br/>
            <label>Sueldo</label>
            <TextInput style={styles.input} placeholder='$0.00' />
            <br/>
            <label>Motivo de separación</label>
            <TextInput style={styles.input} placeholder='Causa de renuncia o despido' />
            <br/>
            <label>Nombre de su jefe directo</label>
            <TextInput style={styles.input} placeholder='Nombre completo de jefe' />
            <br/>
            <label>Puesto de su jefe directo</label>
            <TextInput style={styles.input} placeholder='Puesto de jefe' />
            <br/>
        </View>
        <br/>
        <View style={{borderColor:"black",borderStyle: 'solid',
              borderWidth: 3}}>
            <h2>Empleo Anterior</h2><br/>
            <label>Tiempo que presto sus servicios</label>
            <TextInput style={styles.input} placeholder='Tiempo que presto sus servicios' />
            <br/>
            <label>Nombre de la compañia</label>
            <TextInput style={styles.input} placeholder='Compañia' />
            <br/>
            <label>Direccion de la compañia</label>
            <TextInput style={styles.input} placeholder='Dirección' />
            <br/>
            <label>Telefono de la compañia</label>
            <TextInput style={styles.input} placeholder='telefono celular/oficina' />
            <br/>
            <label>Puesto desempeñado</label>
            <TextInput style={styles.input} placeholder='Puesto' />
            <br/>
            <label>Sueldo</label>
            <TextInput style={styles.input} placeholder='$0.00' />
            <br/>
            <label>Motivo de separación</label>
            <TextInput style={styles.input} placeholder='Causa de renuncia o despido' />
            <br/>
            <label>Nombre de su jefe directo</label>
            <TextInput style={styles.input} placeholder='Nombre completo de jefe' />
            <br/>
            <label>Puesto de su jefe directo</label>
            <TextInput style={styles.input} placeholder='Puesto de jefe' />
            <br/>
        </View>
        <br/>
        <View style={{borderColor:"black",borderStyle: 'solid',
              borderWidth: 3}}>
            <h2>Empleo Anterior</h2><br/>
            <label>Tiempo que presto sus servicios</label>
            <TextInput style={styles.input} placeholder='Tiempo que presto sus servicios' />
            <br/>
            <label>Nombre de la compañia</label>
            <TextInput style={styles.input} placeholder='Compañia' />
            <br/>
            <label>Direccion de la compañia</label>
            <TextInput style={styles.input} placeholder='Dirección' />
            <br/>
            <label>Telefono de la compañia</label>
            <TextInput style={styles.input} placeholder='telefono celular/oficina' />
            <br/>
            <label>Puesto desempeñado</label>
            <TextInput style={styles.input} placeholder='Puesto' />
            <br/>
            <label>Sueldo</label>
            <TextInput style={styles.input} placeholder='$0.00' />
            <br/>
            <label>Motivo de separación</label>
            <TextInput style={styles.input} placeholder='Causa de renuncia o despido' />
            <br/>
            <label>Nombre de su jefe directo</label>
            <TextInput style={styles.input} placeholder='Nombre completo de jefe' />
            <br/>
            <label>Puesto de su jefe directo</label>
            <TextInput style={styles.input} placeholder='Puesto de jefe' />
            <br/>
        </View>
        <br/>
        
        
        
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

  export default Parte3;
  
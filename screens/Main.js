
import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button ,TouchableOpacity,Image} from 'react-native';

function Main({ navigation }) {
    const [gender, setGender] = useState(0);
    return (
      <ScrollView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <h1 style={{ color: 'gray' }}>Datos Generales</h1>
        </View>
        <View>
          <label for="apellido1">Apellido paterno</label>
          <TextInput id="apellido1" style={styles.input} placeholder='Apellido Paterno'></TextInput><br/>
          <label for="apellido2">Apellido Materno</label>
          <TextInput id="apellido2" style={styles.input} placeholder='Apellido Materno'></TextInput><br/>
          <label for="nombre">Nombre</label>
          <TextInput id="nombre" style={styles.input} placeholder='Nombre'></TextInput><br/>
  
          <label for="fecha">Fecha de Nacimiento</label>
          <TextInput id="fecha" placeholder='DD/MM/AAAA' style={styles.input}></TextInput><br/>
          <label for="lugar">Lugar de Nacimiento</label>
          <TextInput id="lugar" style={styles.input} placeholder='Lugar de Nacimiento'></TextInput><br/>
          <label for="nacionalidad">Nacionalidad</label>
          <select id='nacionalidad' style={{ borderRadius: 15, color: "black" }} >
            <option >Mexicana</option>
            <option>Extranjera</option>
            <option>Doble</option>
          </select><br/>
          <View style={{height:50}}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 1,justifyContent:"center"}}>
                <Text style={{fontSize:20}}>Genero:</Text>
              </View>
              <View style={{flex:1}}>
                <View style={{flex:1,flexDirection:"row"}}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => setGender(1)}>
                        <Text style={{color:'#505656'}}> H</Text>
                    </TouchableOpacity>
                    
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => setGender(2)}>
                          <Text style={{color:'#505656'}}> M</Text>
                      </TouchableOpacity>
                  </View>
                </View>
  
              </View>
            </View>
  
          </View>
          <br/>
          <View id="containerImage">
            {gender==1?<Image style={{width:250,height:200,resizeMode:'contain'}} source={{uri: 'https://e7.pngegg.com/pngimages/100/526/png-clipart-avatar-illustration-business-man-avatar-business-woman-heroes-thumbnail.png'}}/>:gender==2?<Image  style={{width:250,height:200,resizeMode:'contain'}} source={{uri: 'https://w7.pngwing.com/pngs/363/698/png-transparent-avatar-female-others-purple-face-black-hair-thumbnail.png'}}/>:<p>Genero no seleccionado</p>}
            
          </View>
          <br/>
  
          <label for="edad">Edad(años)</label>
          <TextInput id="edad" placeholder='Ejemplo: 18...99' style={styles.input}></TextInput><br/>
          <label for="estatura">Estatura(metros)</label>
          <TextInput id="estatura" placeholder='Ejemplo: 1.50...1.99' style={styles.input}></TextInput><br/>
        </View>
        <View style={{alignItems:"end"}}>
            <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button2} onPress={() =>{
                        navigation.navigate('Escolaridad');
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

  export default Main;
  
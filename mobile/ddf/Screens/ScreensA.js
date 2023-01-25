import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Input, Icon, Button } from 'react-native-elements'
import styles from '../Style/MainStyle'
import Cadastro from "./Cadastro" 
export default function ScreensA({navigation}) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null) 

  const entrar = () => {
    navigation.reset({
      index:0,
      routes:[{name: "Principal" }]
    })
  }
  const cadastrar = () => {
    navigation.navigate(Cadastro)
  }
  
  return(
    <View style={styles.container}>
     <Text style={styles.ia}>Plataforma Memoria</Text>
<Input
      placeholder="Login"
      leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
      />
      <Input
      placeholder="PassWord"
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />
<Button
              title="Entre"
              onPress= {() => entrar() }
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' }}
            />
            
            <Button
              title="Cadastro"
              onPress= {() => cadastrar() }
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 20,
                name:"user"
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' }}
            />
    
    </View>
  );
}


import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Input, Icon, Button } from 'react-native-elements'
import styles from '../Style/MainStyle' 
export default function Cadastro({navigation}) {
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
     <Text style={styles.ia}>Cadastre-se</Text>
<Input
      placeholder="Nome "
      
      onChangeText={value => setEmail(value)}
      keyboardType="text"
      />
      <Input
      placeholder="Sobrenome"
      
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />
      <Input
      placeholder="Telefone"
      
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />
      <Input
      placeholder="email"
      
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />
<Button
              title="Concluir"
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
           
    </View>
  );
}
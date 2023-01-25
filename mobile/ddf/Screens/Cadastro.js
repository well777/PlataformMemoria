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
      placeholder="E-mail"
      onChangeText={value => setEmail(value)}
      keyboardType="Email-address"
      />
      <Input
      placeholder="Nome Completo"
      onChangeText={value => setPassword(value)}
      keyboardType="text"
      />
      <Input
      placeholder="CPF"
      onChangeText={value => setPassword(value)}
      keyboardType="number"
      />
      <Input
      placeholder="WhatsApp"
      onChangeText={value => setPassword(value)}
      keyboardType="number"
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
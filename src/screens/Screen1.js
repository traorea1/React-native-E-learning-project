import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import SampleText from '../components/SampleText'
import { Text } from 'react-native-paper'

import ImpText from '../components/ImpText'
import { StyleSheet, CheckBox } from 'react-native'
import { useState } from 'react'

export default function Screen1({ navigation, route }) {
    let [ouiq1, setOuiq1] = useState(false);
    let [nonq1, setNonq1] = useState(false);
    let data = route.params; 
    let val = 0; 
    // make sûre only one box can be cheked a a time 
    if(ouiq1 == true){
      setNonq1 = false;  
      val =1; 
    } 
    if(nonq1 == true){
      setOuiq1 = false 
      val = 0; 
    } 
    data.val = val; 
    console.log(data.val); 
    return (
        <Background>
    
          <Logo />
          <Header>Questionnaire</Header>
          <Paragraph>Scénario</Paragraph>
          <SampleText>Section 1</SampleText>
          <Paragraph>
              Deux jours avant le début des séances, votre prof vous envoie des documents à lire 
              et une série de question à répondre et rendre avnt le début du cours
          </Paragraph> 
          <ImpText>(...)</ImpText>
          <Paragraph>Pensez-Vous être capable de rendre à temps? </Paragraph>
          <CheckBox 
            value = {ouiq1}
            onValueChange={setOuiq1}  
            style = {styles.checkbox}
            
          />
          <Text style = {styles.label}>OUI</Text>
          <CheckBox 
            value = {nonq1}
            onValueChange={setNonq1}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>NON</Text>
          <Button
                mode="outlined"
                onPress={() => navigation.push('Screen2a', data)}
          >
                Question Suivante
          </Button>

        </Background>
      )
}; 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
  });

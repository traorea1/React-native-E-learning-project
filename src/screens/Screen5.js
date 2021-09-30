import React from 'react'
import Background from '../components/Background'
//import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import SampleText from '../components/SampleText'
import { Text } from 'react-native-paper'
import ImpText from '../components/ImpText'
import { StyleSheet, CheckBox } from 'react-native'
import { useState } from 'react'

export default function Screen5({ navigation, route }) {
    let [ouiq5, setOuiq5] = useState(false)
    let [nonq5, setNonq5] = useState(false)

    // get the current value. 
    let data = route.params; 
    let val= 0; 

    if(ouiq5 == true){
      setNonq5 = false; 
      val = 1
    } 
    if(nonq5 == true){
      setOuiq5 = false; 
      val = 0; 
    } 

    return (
        <Background>
          <Header>Questionnaire</Header>
          <SampleText>Question Vrai ou Faux</SampleText>
          <Paragraph>Dans cette section, vous avez des questions très simple à repondre</Paragraph>
          <ImpText>Question 5</ImpText>
          <Paragraph>
            Avez vous déja échouer au préalable à certains de vos examens à cause de votre négligence: 
            parceque vous n'aviez pas préparé l'examen?
          </Paragraph> 
          <CheckBox 
            value = {ouiq5}
            onValueChange={setOuiq5}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>OUI</Text>
          <CheckBox 
            value = {nonq5}
            onValueChange={setNonq5}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>NON</Text>
          <Button
                mode="outlined"
                onPress={() => {
                  data.val = data.val + val; 
                  navigation.push('Screen6', data)}
                }
          >
                Question Suivante
          </Button>
          <Button
                mode="contained"
                onPress={() => navigation.navigate('Screen4')}
          >
                Question Précédente
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

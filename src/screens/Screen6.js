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


export default function Screen6({ navigation, route }) {
    let [ouiq6, setOuiq6] = useState(false)
    let [nonq6, setNonq6] = useState(false)

    // get the old val 
    let data= route.params; 
    let val = 0; 
    // make sûre only one box can be checked at a time. 
    if(ouiq6 == true){
      setNonq6 =false; 
      val = 1; 
    } 
    if(nonq6 == true){
      setOuiq6 = false; 
      val =0; 
    }  


    return (
        <Background>
          <Header>Questionnaire</Header>
          <SampleText>Question Vrai ou Faux</SampleText>
          <Paragraph>Dans cette section, vous avez des questions très simple à repondre</Paragraph>
          <ImpText>Question 6</ImpText>
          <Paragraph>
            Prenez vous le temps de vous poser des questions et faire des points sur vos performances, 
            votre compréhension, et votre expérience le soir après le cours? (self-monitoring)
          </Paragraph> 
          <CheckBox 
            value = {ouiq6}
            onValueChange={setOuiq6}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>OUI</Text>
          <CheckBox 
            value = {nonq6}
            onValueChange={setNonq6}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>NON</Text>
          <Button
                mode="outlined"
                onPress={() => {
                  data.val = data.val + val; 
                  navigation.push('Screen7', data)}
                }
          >
                Question Suivante
          </Button>
          <Button
                mode="contained"
                onPress={() => navigation.navigate('Screen5')}
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

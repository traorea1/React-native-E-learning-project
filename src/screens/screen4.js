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


export default function Screen4({ navigation, route }) {
    let [ouiq4, setOuiq4] = useState(false)
    let [nonq4, setNonq4] = useState(false)

    // get the value from the previous screen 
    let data = route.params; 
    // value to be implemented if the user chcked yes. 
    let val = 0; 
    if(ouiq4 == true){
      setNonq4 = false; 
      val = 1; 
    }  
    if(nonq4 == true){
      setOuiq4 = false; 
      val = 0;  
    }
    return (
        <Background>
          <Header>Questionnaire</Header>
          <SampleText>Question Vrai ou Faux</SampleText>
          <Paragraph>Dans cette section, vous avez des questions très simple à repondre</Paragraph>
          <ImpText>Question 4</ImpText>
          <Paragraph>
          Vous êtes toujours motivées pour un cours quelque soit le prof
          </Paragraph> 
          <CheckBox 
            value = {ouiq4}
            onValueChange={setOuiq4}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>OUI</Text>
          <CheckBox 
            value = {nonq4}
            onValueChange={setNonq4}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>NON</Text>
          <Button
                mode="outlined"
                onPress={() => {
                  data.val = data.val + val; 
                  navigation.push('Screen5', data)}
                }
          >
                Question Suivante
          </Button>
          <Button
                mode="contained"
                onPress={() => navigation.navigate('Screen3')}
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

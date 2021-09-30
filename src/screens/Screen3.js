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


export default function Screen3({ navigation, route }) {
    let [ouiq3, setOuiq3] = useState(false)
    let [nonq3, setNonq3] = useState(false)

    // get the previous value of val. 
    let data = route.params; 
    let val = 0; 

    // make the checkbox one selected option. 
    if(ouiq3 == true){
      setNonq3 = 0
      val = 1; 
    } 
    if(nonq3 == true){
      setOuiq3 = false; 
      val = 0
    } 

    return (
        <Background>
          <Header>Questionnaire</Header>
          <SampleText>Question Vrai ou Faux</SampleText>
          <Paragraph>Dans cette section, vous avez des questions très simple à repondre</Paragraph>
          <ImpText>Question 3</ImpText>
          <Paragraph>
            Êtes vous assez-motivée avant chacune de vos classes pour faire des recherches sur le sujet? 
          </Paragraph> 
          <CheckBox 
            value = {ouiq3}
            onValueChange={setOuiq3}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>OUI</Text>
          <CheckBox 
            value = {nonq3}
            onValueChange={setNonq3}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>NON</Text>
          <Button
                mode="outlined"
                onPress={() => {
                  data.val = data.val+val; 
                  navigation.push('Screen4', data)
                }}
          >
                Question Suivante
          </Button>
          <Button
                mode="contained"
                onPress={() => {
                  navigation.navigate('Screen2b')
                }}
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

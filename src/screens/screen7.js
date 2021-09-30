import React from 'react'
import Background from '../components/Background'
//import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import SampleText from '../components/SampleText'
import ImpText from '../components/ImpText'
import { StyleSheet, Text , CheckBox} from 'react-native'
import { useState } from 'react'


export default function Screen7({ navigation, route }) {
    let [ouiq7, setOuiq7] = useState(false); 
    let [nonq7, setNonq7] = useState(false); 
    //get the old val 
    let data = route.params; 
    let val=0; 
    // locking the checkbox to take only one parameter. 
    if(ouiq7 == true){
      setNonq7 = false; 
      val = 1; 
    } 
    if(nonq7 == true){
      setOuiq7 = false; 
      val = 0; 
    } 
    console.log(data);
    return (
        <Background>
          <Header>Questionnaire</Header>
          <SampleText>Question Vrai ou Faux</SampleText>
          <Paragraph>Dans cette section, vous avez des questions très simple à repondre</Paragraph>
          <ImpText>Question 7</ImpText>
          <Paragraph>
            A la fin du cours et des examens, est ce que vous prenez un temps pour faire un point sur 
            ce qui c'est passé, ce qui aurait pu aller mieux, ce que vous devrez améliorer pour les 
            prochains cours? (Self-évaluation) 
          </Paragraph> 
          <CheckBox 
            value = {ouiq7}
            onValueChange={setOuiq7}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>OUI</Text>
          <CheckBox 
            value = {nonq7}
            onValueChange={setNonq7}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>NON</Text>
          <Button
                mode="outlined"
                onPress={() => {
                  data.val = data.val + val; 
                  navigation.push('QuestResult', data)}
                }
          >
                Question Suivante
          </Button>
          <Button
                mode="contained"
                onPress={() => navigation.navigate('Screen6')}
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

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


export default function Screen2b({ navigation, route }) {
    let [ouiq2b, setOuiq2b] = useState(false)
    let [nonq2b, setNonq2b] = useState(false)
    let [ptq2b, setPtq2b] = useState(false)
    //get the old val from prvious screen 

    let data = route.params;
    // to see the current val. 
    console.log(data)
    
    let val = 0; 
    // make sûre two checkbox are not checked at the same time. 
    if(ouiq2b == true){
      setNonq2b = false; 
      setPtq2b = false;
      val = 1 
    } 
    if(nonq2b == true){
      setOuiq2b =false; 
      setPtq2b = false; 
      val = 0; 
    } 
    if(ptq2b == true){
      setNonq2b = false; 
      setOuiq2b = false; 
      val = 0; 
    } 

    return (
        <Background>
          <Header>Questionnaire</Header>
          <Paragraph>Scénario</Paragraph>
          <SampleText>Question 2</SampleText>
          <ImpText>Section B</ImpText>
          <Paragraph>
          DAns la suite de la même question.  
          </Paragraph> 
          <ImpText>(...)</ImpText>
          <Paragraph>Allez-vous vous mettre tout seul à niveau en lisant les 
            différents documents et visualisant les tutos? </Paragraph>
          <CheckBox 
            value = {ouiq2b}
            onValueChange={setOuiq2b}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>OUI</Text>
          <CheckBox 
            value = {nonq2b}
            onValueChange={setNonq2b}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>NON</Text>
          <CheckBox 
            value = {ptq2b}
            onValueChange={setPtq2b}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>Peut-être</Text>
          <Button
                mode="outlined"
                onPress={() => {
                  data.val = data.val + val; 
                  navigation.push('Screen3', data)}
                }
          >
                Question Suivante
          </Button>
          <Button
                mode="contained"
                onPress={() => navigation.navigate('Screen2a')}
          >
                Question précédente
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

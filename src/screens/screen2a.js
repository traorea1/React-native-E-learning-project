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
import { useState, } from 'react'


export default function Screen2b({ navigation, route }) {
    let [ouiq2a, setOuiq2a] = useState(false)
    let [nonq2a, setNonq2a] = useState(false)
    let [ptq2a, setPtq2a] = useState(false)
    //console.warn(route); 
    //get the value from last screen
    let data = route.params; 
    let val = 0; 
    if(ouiq2a == true){
      setNonq2a = false;
      setPtq2a = false; 
      val = 1;  
    } 
    if(nonq2a == true){
      setOuiq2a = false;
      setPtq2a = false;  
      val = 0;  
    }  
    if(ptq2a == true) {
      setOuiq2a = false; 
      setNonq2a = false; 
      val= 0; 
    } 


    

    return (
        <Background>
          <Header>Questionnaire</Header>
          <Paragraph>Scénario</Paragraph>
          <SampleText>Question 2</SampleText>
          <ImpText>Section A</ImpText>
          <Paragraph>
          Vous devez participer à quatres séances du cours de 4MGMT. 
          Lors de la deuxième séance de cours, vous avez une absence maladie. 
          Vous n'êtes malheureusement pas capable de contacter l'un de vos camarades
          de classe pour obtenir les documents du cours et des explications. 
          Toutefois, puisque vous avez le syllabus du cours, vous savez qu'elle thème ont été 
          abordé durant votre absence. 
          </Paragraph> 
          <ImpText>(...)</ImpText>
          <Paragraph>Allez-vous trouver vous mêmes des documents et tuto sur le net en partant du thème?</Paragraph>
          <CheckBox 
            value = {ouiq2a}
            onValueChange={setOuiq2a}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>OUI</Text>
          <CheckBox 
            value = {nonq2a}
            onValueChange={setNonq2a}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>NON</Text>
          <CheckBox 
            value = {ptq2a}
            onValueChange={setPtq2a}  
            style = {styles.checkbox}
          />
          <Text style = {styles.label}>Peut-être</Text>
          <Button
                mode="outlined"
                onPress={() => {
                  data.val= data.val+val; 
                  navigation.push('Screen2b', data)}
                }
          >
                Question Suivante
          </Button>
          <Button
                mode="contained"
                onPress={() =>{ 
                  navigation.navigate('Screen1')}
                }
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

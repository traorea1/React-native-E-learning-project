import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import ImpText from '../components/ImpText'
import SRLChecker from '../helpers/SRLChecker'
import SampleText from '../components/SampleText'

export default function Question({ navigation, route }) {
  /* save all the data in the datset here */ 
  let data = route.params; 
  //obtain the SRL level of the student. from the srl level helper. 
  const srl = SRLChecker(data.val); 
  // 
  data.srl = srl.key;  
  console.log(data); 
    return (
        <Background>
          <Logo />
          <Header>Enew - Learning</Header>
          <Paragraph>
            Notre mission: Mise en place d'un apprentissage par étudiant.
          </Paragraph>
          <Header>Questionnaire SRL</Header>
          <SampleText>Félicitation <ImpText>{data.name}</ImpText></SampleText>
          <Paragraph>Merci d'avoir pris part à notre questionnaire
              Votre niveau SRL est <ImpText>{srl.value}</ImpText>
          </Paragraph>
          
          <Button
            mode="contained"
            onPress={() => navigation.push('Dashboard', data)}
          >
            Accéder à l'Application
          </Button>
        </Background>
      )
}

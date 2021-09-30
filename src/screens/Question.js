import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import ImpText from '../components/ImpText'

export default function Question({ navigation, route }) {
  console.warn(route); 
  let data = route.params;  
  const name = data.name; 
  console.log(name); 
  return (
        <Background>
          <Logo />
          <Header>Enew - Learning</Header>
          <Paragraph>
            Notre mission: Mise en place d'un apprentissage par étudiant.
          </Paragraph>
          <Header>Questionnaire SRL</Header>
          <Paragraph>Bonjour <ImpText>{name}</ImpText>, aidez nous à mieux vous connaître pour une éducation adapté à vous.</Paragraph>
          <Paragraph>Ce questionnaire que vous allez remplir en clickant sur le <ImpText>boutton suivant </ImpText> 
            à pour but de mieux vous connaître en ce qui concerne votre stratégie de régulation personnel et 
            vous aider en définitif à la réussite de votre cours. 
          </Paragraph>
          <ImpText>Ainsi veuillez SVP être véridique dans vos reponses !!</ImpText>
          <Button
            mode="outlined"
            onPress={() => navigation.push('Screen1',data)}
          >
            Suivant
          </Button>
        </Background>
      )
}

